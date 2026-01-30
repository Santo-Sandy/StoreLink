import { Component } from '@angular/core';
import { CheckpointStatus, DashboardData, OrganizationReport, Route, RouteStatus, RouteSummary, RouteTimeline } from '../../Services/dashboard-data';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIcon } from "@angular/material/icon";
import { Sessionlogin } from '../../Services/sessionlogin';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, MatIcon],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  routes: Route[] = [];
  summary: RouteSummary | null = null;
  organizationReport: OrganizationReport | null = null;
  selectedRoute: Route | null = null;
  routeTimeline: RouteTimeline[] = [];
  activeTab: 'completed' | 'inProgress' | 'pending' = 'completed';
  isLoading = false;
  errorMessage: string | null = null;

  RouteStatus = RouteStatus;
  CheckpointStatus = CheckpointStatus;

  private destroy$ = new Subject<void>();

  constructor(private routeProgressService: DashboardData) { 
    Sessionlogin.session.set(true);
  }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadDashboardData(): void {
    this.isLoading = true;

    this.routeProgressService.getRoutes()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (routes) => {
          this.routes = routes;
          this.summary = this.routeProgressService.getRouteSummary(routes);
          this.routeTimeline = this.routeProgressService.getRouteTimeline(routes);
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = 'Failed to load route data';
          this.isLoading = false;
          console.error('Error loading routes:', error);
        }
      });

    this.routeProgressService.getOrganizationReport()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (report) => {
          this.organizationReport = report;
        }
      });
  }

  getCompletedRoutes(): Route[] {
    return this.routes.filter(r => r.status === RouteStatus.COMPLETED);
  }

  getInProgressRoutes(): Route[] {
    return this.routes.filter(r => r.status === RouteStatus.IN_PROGRESS);
  }

  getPendingRoutes(): Route[] {
    return this.routes.filter(r => r.status === RouteStatus.PENDING);
  }

  selectRoute(route: Route): void {
    this.selectedRoute = route;
    this.routeProgressService.selectRoute(route);
  }

  updateRouteProgress(routeId: string, progress: number): void {
    this.routeProgressService.updateRouteProgress(routeId, progress);
  }

  completeRoute(routeId: string): void {
    this.routeProgressService.completeRoute(routeId);
  }

  startRoute(routeId: string): void {
    this.routeProgressService.startRoute(routeId);
  }

  getStatusClass(status: RouteStatus): string {
    switch (status) {
      case RouteStatus.COMPLETED:
        return 'status-completed';
      case RouteStatus.IN_PROGRESS:
        return 'status-in-progress';
      case RouteStatus.PENDING:
        return 'status-pending';
      case RouteStatus.FAILED:
        return 'status-failed';
      default:
        return '';
    }
  }

  getCheckpointStatusClass(status: CheckpointStatus): string {
    switch (status) {
      case CheckpointStatus.COMPLETED:
        return 'checkpoint-completed';
      case CheckpointStatus.IN_PROGRESS:
        return 'checkpoint-in-progress';
      case CheckpointStatus.PENDING:
        return 'checkpoint-pending';
      case CheckpointStatus.FAILED:
        return 'checkpoint-failed';
      default:
        return '';
    }
  }

  getProgressColor(progress: number): string {
    if (progress >= 90) return 'progress-excellent';
    if (progress >= 70) return 'progress-good';
    if (progress >= 50) return 'progress-fair';
    return 'progress-poor';
  }

  refreshData(): void {
    this.loadDashboardData();
  }

  exportReport(): void {
    const reportData = {
      timestamp: new Date().toISOString(),
      summary: this.summary,
      organizationReport: this.organizationReport,
      routes: this.routes
    };
    const jsonString = JSON.stringify(reportData, null, 2);
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(jsonString));
    element.setAttribute('download', `route_report_${new Date().getTime()}.json`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

}
