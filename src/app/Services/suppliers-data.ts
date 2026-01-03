import { Injectable } from '@angular/core';

interface Suppliers {
  id: string;
  name: string;
  location: string;
  status:string;
  contact: string;
  email: string;
  capacity: string;
  currentProduction: number;
  established: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  description: string;
  unitPrice: number;
  productionCapacity: number;
  currentStock: number;
  monthlyProduction: number;
}

interface Hub {
  id: string;
  name: string;
  location: string;
  distance: string;
  capacity: number;
}

interface ProductDistribution {
  id: string;
  productId: string;
  productName: string;
  hubId: string;
  hubName: string;
  quantitySent: number;
  date: string;
  status: 'pending' | 'in-transit' | 'delivered';
}

interface MonthlyProductionRecord {
  month: string;
  year: number;
  productId: string;
  productName: string;
  produced: number;
  distributed: number;
  remaining: number;
}


@Injectable({
  providedIn: 'root',
})
export class SuppliersData {
  suppliers=[{
    supplier: {
    id: 'SUP-001',
    name: 'Supplier 1',
    location: 'Chennai, Tamil Nadu',
    contact: '+(1 xxxxx-xxxxx)',
    status:'Active',
    email: 'contact@supplier1.com',
    capacity: '100,000 units/month',
    currentProduction: 78500,
    established: '2010'
  },

  products: [
    {
      id: 'PRD-001',
      name: 'Premium Laptop',
      category: 'Electronics',
      sku: 'LAP-PRE-001',
      description: 'High-performance laptop with latest processor',
      unitPrice: 1299.99,
      productionCapacity: 5000,
      currentStock: 3450,
      monthlyProduction: 4850
    },
    {
      id: 'PRD-002',
      name: 'Wireless Mouse',
      category: 'Accessories',
      sku: 'ACC-MOU-002',
      description: 'Ergonomic wireless mouse',
      unitPrice: 29.99,
      productionCapacity: 15000,
      currentStock: 12300,
      monthlyProduction: 14200
    },
    {
      id: 'PRD-003',
      name: 'USB-C Cable',
      category: 'Accessories',
      sku: 'ACC-CAB-003',
      description: 'Fast charging USB-C cable',
      unitPrice: 15.99,
      productionCapacity: 20000,
      currentStock: 18700,
      monthlyProduction: 19500
    },
    {
      id: 'PRD-004',
      name: 'Mechanical Keyboard',
      category: 'Accessories',
      sku: 'ACC-KEY-004',
      description: 'RGB mechanical keyboard',
      unitPrice: 89.99,
      productionCapacity: 8000,
      currentStock: 6200,
      monthlyProduction: 7500
    },
    {
      id: 'PRD-005',
      name: '27" Monitor',
      category: 'Electronics',
      sku: 'MON-27-005',
      description: '4K display with HDR',
      unitPrice: 349.99,
      productionCapacity: 3000,
      currentStock: 2150,
      monthlyProduction: 2800
    },
    {
      id: 'PRD-006',
      name: 'Webcam HD',
      category: 'Electronics',
      sku: 'WEB-HD-006',
      description: '1080p webcam',
      unitPrice: 59.99,
      productionCapacity: 10000,
      currentStock: 8900,
      monthlyProduction: 9600
    }
  ],

  hubs:  [
    {
      id: 'HUB-001',
      name: 'Hub 1',
      location: 'Chennai, Tamil Nadu',
      distance: '4,200 km',
      capacity: 500000
    },
    {
      id: 'HUB-002',
      name: 'Hub 2',
      location: 'Bengaluru, Karnataka',
      distance: '3,800 km',
      capacity: 400000
    },
    {
      id: 'HUB-003',
      name: 'Hub 3',
      location: 'Hydrabed, Andra pradesh',
      distance: '3,500 km',
      capacity: 350000
    }
  ],

  distributions:  [
    {
      id: 'DIST-001',
      productId: 'PRD-001',
      productName: 'Premium Laptop',
      hubId: 'HUB-001',
      hubName: 'Hub 1',
      quantitySent: 1200,
      date: '2025-01-02',
      status: 'delivered'
    },
    {
      id: 'DIST-002',
      productId: 'PRD-002',
      productName: 'Wireless Mouse',
      hubId: 'HUB-001',
      hubName: 'Hub 1',
      quantitySent: 3500,
      date: '2025-01-02',
      status: 'in-transit'
    },
    {
      id: 'DIST-003',
      productId: 'PRD-003',
      productName: 'USB-C Cable',
      hubId: 'HUB-002',
      hubName: 'Hub 2',
      quantitySent: 5000,
      date: '2025-01-01',
      status: 'delivered'
    },
    {
      id: 'DIST-004',
      productId: 'PRD-004',
      productName: 'Mechanical Keyboard',
      hubId: 'HUB-003',
      hubName: 'Hub 3',
      quantitySent: 800,
      date: '2025-01-02',
      status: 'pending'
    }
  ],

  productionRecords:  [
    {
      month: 'December',
      year: 2024,
      productId: 'PRD-001',
      productName: 'Premium Laptop',
      produced: 4850,
      distributed: 4200,
      remaining: 650
    },
    {
      month: 'December',
      year: 2024,
      productId: 'PRD-002',
      productName: 'Wireless Mouse',
      produced: 14200,
      distributed: 13500,
      remaining: 700
    },
    {
      month: 'December',
      year: 2024,
      productId: 'PRD-003',
      productName: 'USB-C Cable',
      produced: 19500,
      distributed: 18800,
      remaining: 700
    },
    {
      month: 'November',
      year: 2024,
      productId: 'PRD-001',
      productName: 'Premium Laptop',
      produced: 4700,
      distributed: 4500,
      remaining: 200
    },
    {
      month: 'November',
      year: 2024,
      productId: 'PRD-002',
      productName: 'Wireless Mouse',
      produced: 13800,
      distributed: 13200,
      remaining: 600
    }
  ]
  },
{
    supplier: {
    id: 'SUP-002',
    name: 'Supplier 2',
    location: 'Bengaluru, Karanataka',
    contact: '+(1 xxxxx-xxxxx)',
    status:'Inactive',
    email: 'contact@supplier2.com',
    capacity: '80,000 units/month',
    currentProduction: 74567,
    established: '2000'
  },

  products: [
    {
      id: 'PRD-001',
      name: 'Premium Laptop',
      category: 'Electronics',
      sku: 'LAP-PRE-001',
      description: 'High-performance laptop with latest processor',
      unitPrice: 1299.99,
      productionCapacity: 5000,
      currentStock: 3450,
      monthlyProduction: 4850
    },
    {
      id: 'PRD-002',
      name: 'Wireless Mouse',
      category: 'Accessories',
      sku: 'ACC-MOU-002',
      description: 'Ergonomic wireless mouse',
      unitPrice: 29.99,
      productionCapacity: 15000,
      currentStock: 12300,
      monthlyProduction: 14200
    },
    {
      id: 'PRD-003',
      name: 'USB-C Cable',
      category: 'Accessories',
      sku: 'ACC-CAB-003',
      description: 'Fast charging USB-C cable',
      unitPrice: 15.99,
      productionCapacity: 20000,
      currentStock: 18700,
      monthlyProduction: 19500
    },
    {
      id: 'PRD-004',
      name: 'Mechanical Keyboard',
      category: 'Accessories',
      sku: 'ACC-KEY-004',
      description: 'RGB mechanical keyboard',
      unitPrice: 89.99,
      productionCapacity: 8000,
      currentStock: 6200,
      monthlyProduction: 7500
    },
    {
      id: 'PRD-005',
      name: '27" Monitor',
      category: 'Electronics',
      sku: 'MON-27-005',
      description: '4K display with HDR',
      unitPrice: 349.99,
      productionCapacity: 3000,
      currentStock: 2150,
      monthlyProduction: 2800
    },
    {
      id: 'PRD-006',
      name: 'Webcam HD',
      category: 'Electronics',
      sku: 'WEB-HD-006',
      description: '1080p webcam',
      unitPrice: 59.99,
      productionCapacity: 10000,
      currentStock: 8900,
      monthlyProduction: 9600
    }
  ],

  hubs:  [
    {
      id: 'HUB-001',
      name: 'Hub 1',
      location: 'Chennai, Tamil Nadu',
      distance: '4,200 km',
      capacity: 500000
    },
    {
      id: 'HUB-002',
      name: 'Hub 2',
      location: 'Bengaluru, Karnataka',
      distance: '3,800 km',
      capacity: 400000
    },
    {
      id: 'HUB-003',
      name: 'Hub 3',
      location: 'Hydrabed, Andra pradesh',
      distance: '3,500 km',
      capacity: 350000
    }
  ],

  distributions:  [
    {
      id: 'DIST-001',
      productId: 'PRD-001',
      productName: 'Premium Laptop',
      hubId: 'HUB-001',
      hubName: 'Hub 1',
      quantitySent: 1200,
      date: '2025-01-02',
      status: 'delivered'
    },
    {
      id: 'DIST-002',
      productId: 'PRD-002',
      productName: 'Wireless Mouse',
      hubId: 'HUB-001',
      hubName: 'Hub 1',
      quantitySent: 3500,
      date: '2025-01-02',
      status: 'in-transit'
    },
    {
      id: 'DIST-003',
      productId: 'PRD-003',
      productName: 'USB-C Cable',
      hubId: 'HUB-002',
      hubName: 'Hub 2',
      quantitySent: 5000,
      date: '2025-01-01',
      status: 'delivered'
    },
    {
      id: 'DIST-004',
      productId: 'PRD-004',
      productName: 'Mechanical Keyboard',
      hubId: 'HUB-003',
      hubName: 'Hub 3',
      quantitySent: 800,
      date: '2025-01-02',
      status: 'pending'
    }
  ],

  productionRecords:  [
    {
      month: 'December',
      year: 2024,
      productId: 'PRD-001',
      productName: 'Premium Laptop',
      produced: 4850,
      distributed: 4200,
      remaining: 650
    },
    {
      month: 'December',
      year: 2024,
      productId: 'PRD-002',
      productName: 'Wireless Mouse',
      produced: 14200,
      distributed: 13500,
      remaining: 700
    },
    {
      month: 'December',
      year: 2024,
      productId: 'PRD-003',
      productName: 'USB-C Cable',
      produced: 19500,
      distributed: 18800,
      remaining: 700
    },
    {
      month: 'November',
      year: 2024,
      productId: 'PRD-001',
      productName: 'Premium Laptop',
      produced: 4700,
      distributed: 4500,
      remaining: 200
    },
    {
      month: 'November',
      year: 2024,
      productId: 'PRD-002',
      productName: 'Wireless Mouse',
      produced: 13800,
      distributed: 13200,
      remaining: 600
    }
  ]
  }];
set(){
  return this.suppliers;
}

}
