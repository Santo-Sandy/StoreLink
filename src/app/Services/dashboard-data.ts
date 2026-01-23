import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface RouteCheckpoint {
  id: string;
  name: string;
  timestamp: Date;
  status: CheckpointStatus;
  location: string;
  notes: string;
}

export enum CheckpointStatus {
  COMPLETED = 'completed',
  IN_PROGRESS = 'in_progress',
  PENDING = 'pending',
  FAILED = 'failed'
}

export interface Route {
  id: string;
  name: string;
  startLocation: string;
  endLocation: string;
  status: RouteStatus;
  progress: number;
  totalDistance: number;
  completedDistance: number;
  estimatedCompletion: Date;
  actualCompletion: Date | null;
  checkpoints: RouteCheckpoint[];
  efficiency: number;
  lastUpdated: Date;
}

export enum RouteStatus {
  COMPLETED = 'completed',
  IN_PROGRESS = 'in_progress',
  PENDING = 'pending',
  FAILED = 'failed'
}

export interface RouteSummary {
  totalRoutes: number;
  completedRoutes: number;
  inProgressRoutes: number;
  pendingRoutes: number;
  failedRoutes: number;
  overallProgress: number;
  avgEfficiency: number;
  totalDistance: number;
  completedDistance: number;
}

export interface OrganizationReport {
  totalOperationalEfficiency: number;
  completionRate: number;
  timelinessScore: number;
  qualityScore: number;
  costEffectiveness: number;
  customerSatisfaction: number;
  resourceUtilization: number;
  riskLevel: string;
  lastUpdated: Date;
}

export interface RouteTimeline {
  date: Date;
  completedCount: number;
  inProgressCount: number;
  pendingCount: number;
  failedCount: number;
}


@Injectable({
  providedIn: 'root',
})
export class DashboardData {

  private routes$ = new BehaviorSubject<Route[]>([]);
  private organizationReport$ = new BehaviorSubject<OrganizationReport | null>(null);
  private selectedRoute$ = new BehaviorSubject<Route | null>(null);

  constructor() {
    this.initializeData();
  }

  private initializeData(): void {
    const routes = this.generateMockRoutes();
    this.routes$.next(routes);
    this.organizationReport$.next(this.generateOrganizationReport(routes));
  }

  getRoutes(): Observable<Route[]> {
    return this.routes$.asObservable();
  }

  getOrganizationReport(): Observable<OrganizationReport | null> {
    return this.organizationReport$.asObservable();
  }

  getSelectedRoute(): Observable<Route | null> {
    return this.selectedRoute$.asObservable();
  }

  selectRoute(route: Route): void {
    this.selectedRoute$.next(route);
  }

  getRouteSummary(routes: Route[]): RouteSummary {
    const completed = routes.filter(r => r.status === RouteStatus.COMPLETED).length;
    const inProgress = routes.filter(r => r.status === RouteStatus.IN_PROGRESS).length;
    const pending = routes.filter(r => r.status === RouteStatus.PENDING).length;
    const failed = routes.filter(r => r.status === RouteStatus.FAILED).length;

    const totalDistance = routes.reduce((sum, r) => sum + r.totalDistance, 0);
    const completedDistance = routes.reduce((sum, r) => sum + r.completedDistance, 0);

    const overallProgress = routes.length > 0
      ? Math.round((completed / routes.length) * 100)
      : 0;

    const avgEfficiency = routes.length > 0
      ? Math.round(routes.reduce((sum, r) => sum + r.efficiency, 0) / routes.length)
      : 0;

    return {
      totalRoutes: routes.length,
      completedRoutes: completed,
      inProgressRoutes: inProgress,
      pendingRoutes: pending,
      failedRoutes: failed,
      overallProgress,
      avgEfficiency,
      totalDistance,
      completedDistance
    };
  }

  getRouteTimeline(routes: Route[]): RouteTimeline[] {
    const timeline: { [key: string]: RouteTimeline } = {};
    const now = new Date();

    for (let i = 0; i < 30; i++) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      const dateKey = date.toISOString().split('T')[0];

      timeline[dateKey] = {
        date: new Date(dateKey),
        completedCount: 0,
        inProgressCount: 0,
        pendingCount: 0,
        failedCount: 0
      };
    }

    routes.forEach(route => {
      if (route.actualCompletion) {
        const dateKey = route.actualCompletion.toISOString().split('T')[0];
        if (timeline[dateKey]) {
          timeline[dateKey].completedCount++;
        }
      } else if (route.status === RouteStatus.IN_PROGRESS) {
        const dateKey = new Date().toISOString().split('T')[0];
        if (timeline[dateKey]) {
          timeline[dateKey].inProgressCount++;
        }
      } else if (route.status === RouteStatus.PENDING) {
        const dateKey = new Date().toISOString().split('T')[0];
        if (timeline[dateKey]) {
          timeline[dateKey].pendingCount++;
        }
      } else if (route.status === RouteStatus.FAILED) {
        const dateKey = new Date().toISOString().split('T')[0];
        if (timeline[dateKey]) {
          timeline[dateKey].failedCount++;
        }
      }
    });

    return Object.values(timeline).reverse();
  }

  private generateMockRoutes(): Route[] {
    return [
      // Completed Routes
      {
        id: 'route-001',
        name: 'New York to Boston Delivery',
        startLocation: 'New York Distribution Center',
        endLocation: 'Boston Regional Hub',
        status: RouteStatus.COMPLETED,
        progress: 100,
        totalDistance: 215,
        completedDistance: 215,
        estimatedCompletion: new Date('2024-01-15'),
        actualCompletion: new Date('2024-01-14'),
        efficiency: 98,
        lastUpdated: new Date('2024-01-14'),
        checkpoints: [
          {
            id: 'cp1',
            name: 'Package Loaded',
            timestamp: new Date('2024-01-13 08:00'),
            status: CheckpointStatus.COMPLETED,
            location: 'New York',
            notes: 'All items loaded and verified'
          },
          {
            id: 'cp2',
            name: 'In Transit',
            timestamp: new Date('2024-01-13 14:00'),
            status: CheckpointStatus.COMPLETED,
            location: 'Hartford, CT',
            notes: 'Route proceeding on schedule'
          },
          {
            id: 'cp3',
            name: 'Delivery Completed',
            timestamp: new Date('2024-01-14 18:30'),
            status: CheckpointStatus.COMPLETED,
            location: 'Boston',
            notes: 'All packages delivered successfully'
          }
        ]
      },
      {
        id: 'route-002',
        name: 'Miami to Atlanta Supply Run',
        startLocation: 'Miami Distribution Center',
        endLocation: 'Atlanta Warehouse',
        status: RouteStatus.COMPLETED,
        progress: 100,
        totalDistance: 662,
        completedDistance: 662,
        estimatedCompletion: new Date('2024-01-16'),
        actualCompletion: new Date('2024-01-15'),
        efficiency: 96,
        lastUpdated: new Date('2024-01-15'),
        checkpoints: [
          {
            id: 'cp4',
            name: 'Warehouse Dispatch',
            timestamp: new Date('2024-01-13 10:00'),
            status: CheckpointStatus.COMPLETED,
            location: 'Miami',
            notes: 'Cargo inspected and secured'
          },
          {
            id: 'cp5',
            name: 'Checkpoint 1',
            timestamp: new Date('2024-01-14 08:00'),
            status: CheckpointStatus.COMPLETED,
            location: 'Jacksonville, FL',
            notes: 'Fuel stop, no issues'
          },
          {
            id: 'cp6',
            name: 'Final Delivery',
            timestamp: new Date('2024-01-15 16:00'),
            status: CheckpointStatus.COMPLETED,
            location: 'Atlanta',
            notes: 'Delivered to destination warehouse'
          }
        ]
      },
      {
        id: 'route-003',
        name: 'Chicago Supply Distribution',
        startLocation: 'Chicago Central Hub',
        endLocation: 'Minneapolis Distribution Point',
        status: RouteStatus.COMPLETED,
        progress: 100,
        totalDistance: 410,
        completedDistance: 410,
        estimatedCompletion: new Date('2024-01-17'),
        actualCompletion: new Date('2024-01-16'),
        efficiency: 94,
        lastUpdated: new Date('2024-01-16'),
        checkpoints: [
          {
            id: 'cp7',
            name: 'Loading Start',
            timestamp: new Date('2024-01-14 06:00'),
            status: CheckpointStatus.COMPLETED,
            location: 'Chicago',
            notes: 'Start loading cargo'
          },
          {
            id: 'cp8',
            name: 'Midway Check',
            timestamp: new Date('2024-01-15 12:00'),
            status: CheckpointStatus.COMPLETED,
            location: 'Madison, WI',
            notes: 'Vehicle inspection passed'
          },
          {
            id: 'cp9',
            name: 'Destination Arrival',
            timestamp: new Date('2024-01-16 14:30'),
            status: CheckpointStatus.COMPLETED,
            location: 'Minneapolis',
            notes: 'All items received and verified'
          }
        ]
      },

      // In Progress Routes
      {
        id: 'route-004',
        name: 'Los Angeles to San Francisco Shipment',
        startLocation: 'Los Angeles Distribution Center',
        endLocation: 'San Francisco Hub',
        status: RouteStatus.IN_PROGRESS,
        progress: 65,
        totalDistance: 383,
        completedDistance: 249,
        estimatedCompletion: new Date('2024-01-20'),
        actualCompletion: null,
        efficiency: 87,
        lastUpdated: new Date(),
        checkpoints: [
          {
            id: 'cp10',
            name: 'Package Loading',
            timestamp: new Date('2024-01-18 07:00'),
            status: CheckpointStatus.COMPLETED,
            location: 'Los Angeles',
            notes: 'Loading initiated'
          },
          {
            id: 'cp11',
            name: 'Currently in Transit',
            timestamp: new Date('2024-01-19 14:00'),
            status: CheckpointStatus.IN_PROGRESS,
            location: 'Fresno, CA',
            notes: 'Halfway through journey'
          },
          {
            id: 'cp12',
            name: 'Final Delivery',
            timestamp: new Date(),
            status: CheckpointStatus.PENDING,
            location: 'San Francisco',
            notes: 'Awaiting completion'
          }
        ]
      },
      {
        id: 'route-005',
        name: 'Dallas to Houston Regional Transfer',
        startLocation: 'Dallas Hub',
        endLocation: 'Houston Distribution Center',
        status: RouteStatus.IN_PROGRESS,
        progress: 45,
        totalDistance: 240,
        completedDistance: 108,
        estimatedCompletion: new Date('2024-01-22'),
        actualCompletion: null,
        efficiency: 82,
        lastUpdated: new Date(),
        checkpoints: [
          {
            id: 'cp13',
            name: 'Route Initiated',
            timestamp: new Date('2024-01-19 09:00'),
            status: CheckpointStatus.COMPLETED,
            location: 'Dallas',
            notes: 'Vehicle ready and loaded'
          },
          {
            id: 'cp14',
            name: 'In Transit',
            timestamp: new Date('2024-01-20 11:00'),
            status: CheckpointStatus.IN_PROGRESS,
            location: 'Between Dallas and Houston',
            notes: 'En route, on schedule'
          },
          {
            id: 'cp15',
            name: 'Arrival at Destination',
            timestamp: new Date(),
            status: CheckpointStatus.PENDING,
            location: 'Houston',
            notes: 'Pending arrival'
          }
        ]
      },
      {
        id: 'route-006',
        name: 'Denver to Salt Lake City Supply Run',
        startLocation: 'Denver Warehouse',
        endLocation: 'Salt Lake City Hub',
        status: RouteStatus.IN_PROGRESS,
        progress: 30,
        totalDistance: 525,
        completedDistance: 158,
        estimatedCompletion: new Date('2024-01-23'),
        actualCompletion: null,
        efficiency: 75,
        lastUpdated: new Date(),
        checkpoints: [
          {
            id: 'cp16',
            name: 'Departure',
            timestamp: new Date('2024-01-19 05:00'),
            status: CheckpointStatus.COMPLETED,
            location: 'Denver',
            notes: 'Route departure confirmed'
          },
          {
            id: 'cp17',
            name: 'Progress Checkpoint',
            timestamp: new Date('2024-01-20 09:00'),
            status: CheckpointStatus.IN_PROGRESS,
            location: 'Northern Colorado',
            notes: 'Making good progress'
          },
          {
            id: 'cp18',
            name: 'Delivery',
            timestamp: new Date(),
            status: CheckpointStatus.PENDING,
            location: 'Salt Lake City',
            notes: 'Pending delivery'
          }
        ]
      },

      // Pending Routes
      {
        id: 'route-007',
        name: 'Seattle to Portland Distribution',
        startLocation: 'Seattle Distribution Center',
        endLocation: 'Portland Regional Hub',
        status: RouteStatus.PENDING,
        progress: 0,
        totalDistance: 174,
        completedDistance: 0,
        estimatedCompletion: new Date('2024-01-25'),
        actualCompletion: null,
        efficiency: 0,
        lastUpdated: new Date(),
        checkpoints: [
          {
            id: 'cp19',
            name: 'Preparation',
            timestamp: new Date(),
            status: CheckpointStatus.PENDING,
            location: 'Seattle',
            notes: 'Awaiting cargo loading'
          },
          {
            id: 'cp20',
            name: 'In Transit',
            timestamp: new Date(),
            status: CheckpointStatus.PENDING,
            location: 'Pacific Northwest',
            notes: 'To be scheduled'
          },
          {
            id: 'cp21',
            name: 'Delivery',
            timestamp: new Date(),
            status: CheckpointStatus.PENDING,
            location: 'Portland',
            notes: 'To be determined'
          }
        ]
      },
      {
        id: 'route-008',
        name: 'Phoenix to Las Vegas Supply Chain',
        startLocation: 'Phoenix Distribution',
        endLocation: 'Las Vegas Hub',
        status: RouteStatus.PENDING,
        progress: 0,
        totalDistance: 300,
        completedDistance: 0,
        estimatedCompletion: new Date('2024-01-26'),
        actualCompletion: null,
        efficiency: 0,
        lastUpdated: new Date(),
        checkpoints: [
          {
            id: 'cp22',
            name: 'Start',
            timestamp: new Date(),
            status: CheckpointStatus.PENDING,
            location: 'Phoenix',
            notes: 'Route queued for initiation'
          },
          {
            id: 'cp23',
            name: 'Transit',
            timestamp: new Date(),
            status: CheckpointStatus.PENDING,
            location: 'Desert Route',
            notes: 'Pending assignment'
          },
          {
            id: 'cp24',
            name: 'Delivery',
            timestamp: new Date(),
            status: CheckpointStatus.PENDING,
            location: 'Las Vegas',
            notes: 'Scheduled for later'
          }
        ]
      },
      {
        id: 'route-009',
        name: 'Orlando to Miami Express Route',
        startLocation: 'Orlando Logistics Center',
        endLocation: 'Miami Hub',
        status: RouteStatus.PENDING,
        progress: 0,
        totalDistance: 235,
        completedDistance: 0,
        estimatedCompletion: new Date('2024-01-27'),
        actualCompletion: null,
        efficiency: 0,
        lastUpdated: new Date(),
        checkpoints: [
          {
            id: 'cp25',
            name: 'Ready for Loading',
            timestamp: new Date(),
            status: CheckpointStatus.PENDING,
            location: 'Orlando',
            notes: 'Cargo being prepared'
          },
          {
            id: 'cp26',
            name: 'Route Execution',
            timestamp: new Date(),
            status: CheckpointStatus.PENDING,
            location: 'Central Florida',
            notes: 'Awaiting driver assignment'
          },
          {
            id: 'cp27',
            name: 'Final Delivery',
            timestamp: new Date(),
            status: CheckpointStatus.PENDING,
            location: 'Miami',
            notes: 'Destination confirmed'
          }
        ]
      }
    ];
  }

  private generateOrganizationReport(routes: Route[]): OrganizationReport {
    const summary = this.getRouteSummary(routes);

    return {
      totalOperationalEfficiency: summary.avgEfficiency,
      completionRate: summary.overallProgress,
      timelinessScore: 92,
      qualityScore: 95,
      costEffectiveness: 88,
      customerSatisfaction: 94,
      resourceUtilization: summary.avgEfficiency,
      riskLevel: this.calculateRiskLevel(summary.overallProgress),
      lastUpdated: new Date()
    };
  }

  private calculateRiskLevel(completionRate: number): string {
    if (completionRate >= 90) return 'Low';
    if (completionRate >= 70) return 'Medium';
    if (completionRate >= 50) return 'High';
    return 'Critical';
  }

  updateRouteProgress(routeId: string, progress: number): void {
    const routes = this.routes$.value;
    const route = routes.find(r => r.id === routeId);
    if (route) {
      route.progress = progress;
      route.completedDistance = (route.totalDistance * progress) / 100;
      route.lastUpdated = new Date();
      this.routes$.next([...routes]);
      this.organizationReport$.next(this.generateOrganizationReport(routes));
    }
  }

  completeRoute(routeId: string): void {
    const routes = this.routes$.value;
    const route = routes.find(r => r.id === routeId);
    if (route) {
      route.status = RouteStatus.COMPLETED;
      route.progress = 100;
      route.completedDistance = route.totalDistance;
      route.actualCompletion = new Date();
      route.lastUpdated = new Date();
      this.routes$.next([...routes]);
      this.organizationReport$.next(this.generateOrganizationReport(routes));
    }
  }

  startRoute(routeId: string): void {
    const routes = this.routes$.value;
    const route = routes.find(r => r.id === routeId);
    if (route) {
      route.status = RouteStatus.IN_PROGRESS;
      route.progress = 5;
      route.lastUpdated = new Date();
      this.routes$.next([...routes]);
      this.organizationReport$.next(this.generateOrganizationReport(routes));
    }
  }

}
