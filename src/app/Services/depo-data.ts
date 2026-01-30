import { Injectable } from '@angular/core';

interface Depot {
  id: string;
  name: string;
  location: string;
  address: string;
  capacity: number;
  currentStock: number;
  status: 'active' | 'inactive' | 'maintenance';
  manager: string;
  managerContact: string;
  managerEmail: string;
  connectedHubs: Hub[];
  connectedStores: Store[];
  lastUpdated: Date;
  establishedDate: Date;
  operatingHours: string;
  totalArea: string;
  warehouseType: string;
}

interface Hub {
  id: string;
  name: string;
  location: string;
}

interface Store {
  id: string;
  name: string;
  location: string;
}

interface Activity {
  id: string;
  type: 'inbound' | 'outbound' | 'transfer' | 'maintenance';
  description: string;
  timestamp: Date;
  quantity?: number;
  from?: string;
  to?: string;
}

interface Shipment {
  id: string;
  from: string;
  to: string;
  status: 'pending' | 'in-transit' | 'delivered' | 'cancelled';
  products: number;
  date: Date;
  eta?: string;
}


@Injectable({
  providedIn: 'root',
})
export class DepoData {
  
  depots=[{
    depot : {
    id: 'D001',
    name: 'Central Depot A',
    location: 'Mumbai, Maharashtra',
    address: '123 Warehouse District, Andheri East, Mumbai, Maharashtra 400069',
    capacity: 5000,
    currentStock: 3200,
    status: 'active',
    manager: 'Rajesh Kumar',
    managerContact: '+91 98765 43210',
    managerEmail: 'rajesh.kumar@company.com',
    connectedHubs: [
      { id: 'H001', name: 'Hub North Mumbai', location: 'Borivali, Mumbai' },
      { id: 'H002', name: 'Hub South Mumbai', location: 'Colaba, Mumbai' }
    ],
    connectedStores: [
      { id: 'S001', name: 'Store Alpha', location: 'Bandra, Mumbai' },
      { id: 'S002', name: 'Store Beta', location: 'Andheri, Mumbai' },
      { id: 'S003', name: 'Store Gamma', location: 'Powai, Mumbai' }
    ],
    lastUpdated: new Date('2024-01-15'),
    establishedDate: new Date('2020-03-15'),
    operatingHours: '24/7',
    totalArea: '50,000 sq ft',
    warehouseType: 'Temperature Controlled'
  },

  activities:  [
    {
      id: 'A001',
      type: 'inbound',
      description: 'Received shipment from Hub North Mumbai',
      timestamp: new Date('2024-01-15T10:30:00'),
      quantity: 500,
      from: 'Hub H001'
    },
    {
      id: 'A002',
      type: 'outbound',
      description: 'Dispatched products to Store Alpha',
      timestamp: new Date('2024-01-15T09:15:00'),
      quantity: 300,
      to: 'Store S001'
    },
    {
      id: 'A003',
      type: 'transfer',
      description: 'Internal stock reorganization',
      timestamp: new Date('2024-01-14T16:45:00'),
      quantity: 150
    },
    {
      id: 'A004',
      type: 'maintenance',
      description: 'Routine equipment inspection completed',
      timestamp: new Date('2024-01-14T08:00:00')
    },
    {
      id: 'A005',
      type: 'inbound',
      description: 'Received shipment from Hub South Mumbai',
      timestamp: new Date('2024-01-13T14:20:00'),
      quantity: 450,
      from: 'Hub H002'
    }
  ],

  shipments:[
    {
      id: 'SH001',
      from: 'Hub H001',
      to: 'Central Depot A',
      status: 'in-transit',
      products: 250,
      date: new Date('2024-01-16'),
      eta: '2 hours'
    },
    {
      id: 'SH002',
      from: 'Central Depot A',
      to: 'Store S001',
      status: 'delivered',
      products: 180,
      date: new Date('2024-01-15')
    },
    {
      id: 'SH003',
      from: 'Hub H002',
      to: 'Central Depot A',
      status: 'pending',
      products: 320,
      date: new Date('2024-01-17'),
      eta: '1 day'
    }
  ]},
{
    depot : {
    id: 'D001',
    name: 'Central Depot A',
    location: 'Mumbai, Maharashtra',
    address: '123 Warehouse District, Andheri East, Mumbai, Maharashtra 400069',
    capacity: 5000,
    currentStock: 3200,
    status: 'active',
    manager: 'Rajesh Kumar',
    managerContact: '+91 98765 43210',
    managerEmail: 'rajesh.kumar@company.com',
    connectedHubs: [
      { id: 'H001', name: 'Hub North Mumbai', location: 'Borivali, Mumbai' },
      { id: 'H002', name: 'Hub South Mumbai', location: 'Colaba, Mumbai' }
    ],
    connectedStores: [
      { id: 'S001', name: 'Store Alpha', location: 'Bandra, Mumbai' },
      { id: 'S002', name: 'Store Beta', location: 'Andheri, Mumbai' },
      { id: 'S003', name: 'Store Gamma', location: 'Powai, Mumbai' }
    ],
    lastUpdated: new Date('2024-01-15'),
    establishedDate: new Date('2020-03-15'),
    operatingHours: '24/7',
    totalArea: '50,000 sq ft',
    warehouseType: 'Temperature Controlled'
  },

  activities:  [
    {
      id: 'A001',
      type: 'inbound',
      description: 'Received shipment from Hub North Mumbai',
      timestamp: new Date('2024-01-15T10:30:00'),
      quantity: 500,
      from: 'Hub H001'
    },
    {
      id: 'A002',
      type: 'outbound',
      description: 'Dispatched products to Store Alpha',
      timestamp: new Date('2024-01-15T09:15:00'),
      quantity: 300,
      to: 'Store S001'
    },
    {
      id: 'A003',
      type: 'transfer',
      description: 'Internal stock reorganization',
      timestamp: new Date('2024-01-14T16:45:00'),
      quantity: 150
    },
    {
      id: 'A004',
      type: 'maintenance',
      description: 'Routine equipment inspection completed',
      timestamp: new Date('2024-01-14T08:00:00')
    },
    {
      id: 'A005',
      type: 'inbound',
      description: 'Received shipment from Hub South Mumbai',
      timestamp: new Date('2024-01-13T14:20:00'),
      quantity: 450,
      from: 'Hub H002'
    }
  ],

  shipments:[
    {
      id: 'SH001',
      from: 'Hub H001',
      to: 'Central Depot A',
      status: 'in-transit',
      products: 250,
      date: new Date('2024-01-16'),
      eta: '2 hours'
    },
    {
      id: 'SH002',
      from: 'Central Depot A',
      to: 'Store S001',
      status: 'delivered',
      products: 180,
      date: new Date('2024-01-15')
    },
    {
      id: 'SH003',
      from: 'Hub H002',
      to: 'Central Depot A',
      status: 'pending',
      products: 320,
      date: new Date('2024-01-17'),
      eta: '1 day'
    }
  ]},
{
    depot : {
    id: 'D001',
    name: 'Central Depot A',
    location: 'Mumbai, Maharashtra',
    address: '123 Warehouse District, Andheri East, Mumbai, Maharashtra 400069',
    capacity: 5000,
    currentStock: 3200,
    status: 'active',
    manager: 'Rajesh Kumar',
    managerContact: '+91 98765 43210',
    managerEmail: 'rajesh.kumar@company.com',
    connectedHubs: [
      { id: 'H001', name: 'Hub North Mumbai', location: 'Borivali, Mumbai' },
      { id: 'H002', name: 'Hub South Mumbai', location: 'Colaba, Mumbai' }
    ],
    connectedStores: [
      { id: 'S001', name: 'Store Alpha', location: 'Bandra, Mumbai' },
      { id: 'S002', name: 'Store Beta', location: 'Andheri, Mumbai' },
      { id: 'S003', name: 'Store Gamma', location: 'Powai, Mumbai' }
    ],
    lastUpdated: new Date('2024-01-15'),
    establishedDate: new Date('2020-03-15'),
    operatingHours: '24/7',
    totalArea: '50,000 sq ft',
    warehouseType: 'Temperature Controlled'
  },

  activities:  [
    {
      id: 'A001',
      type: 'inbound',
      description: 'Received shipment from Hub North Mumbai',
      timestamp: new Date('2024-01-15T10:30:00'),
      quantity: 500,
      from: 'Hub H001'
    },
    {
      id: 'A002',
      type: 'outbound',
      description: 'Dispatched products to Store Alpha',
      timestamp: new Date('2024-01-15T09:15:00'),
      quantity: 300,
      to: 'Store S001'
    },
    {
      id: 'A003',
      type: 'transfer',
      description: 'Internal stock reorganization',
      timestamp: new Date('2024-01-14T16:45:00'),
      quantity: 150
    },
    {
      id: 'A004',
      type: 'maintenance',
      description: 'Routine equipment inspection completed',
      timestamp: new Date('2024-01-14T08:00:00')
    },
    {
      id: 'A005',
      type: 'inbound',
      description: 'Received shipment from Hub South Mumbai',
      timestamp: new Date('2024-01-13T14:20:00'),
      quantity: 450,
      from: 'Hub H002'
    }
  ],

  shipments:[
    {
      id: 'SH001',
      from: 'Hub H001',
      to: 'Central Depot A',
      status: 'in-transit',
      products: 250,
      date: new Date('2024-01-16'),
      eta: '2 hours'
    },
    {
      id: 'SH002',
      from: 'Central Depot A',
      to: 'Store S001',
      status: 'delivered',
      products: 180,
      date: new Date('2024-01-15')
    },
    {
      id: 'SH003',
      from: 'Hub H002',
      to: 'Central Depot A',
      status: 'pending',
      products: 320,
      date: new Date('2024-01-17'),
      eta: '1 day'
    }
  ]}
]

}
