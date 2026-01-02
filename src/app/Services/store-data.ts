import { Injectable } from '@angular/core';

interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  quantity: number;
  minStock: number;
  maxStock: number;
  price: string;
  lastRestocked: string;
  supplier: string;
  status: string;
}

interface StoreDatas {
  id: string;
  name: string;
  location: string;
  manager: string;
  contact: string;
  capacity: string;
  currentStock: number;
  status: string;
}

interface Stores{
  
}

@Injectable({
  providedIn: 'root',
})
export class StoreData {


  Stores=[{
    storeId:"001",
    storeData: {
    id: "STORE-001",
    name: "Store 1",
    location: "Chennai, Tamil Nadu",
    manager: "xxxxx xxxxxx",
    contact: "+91 xxxxx-xxxxx",
    capacity: "100k units",
    currentStock: 3245,
    status: "Active"
  },

  supplyChain : {
    supplier: {
      id: "SUPPLIER-001",
      name: "Supplier 1",
      location: "Chennai,Tamil Nadu",
      contact: "+91 xxxxx-xxxxx"
    },
    hub: {
      id: "HUB-001",
      name: "Hub 1",
      location: "Chennai, Tamil Nadu",
      contact: "+91 xxxxx xxxxx",
    },
    depot: {
      id: "DEP-001",
      name: "Depot 1",
      location: "Chennai, Tamil Nadu",
      contact: "+91 xxxxx-xxxxx"
    }
  },

  currentProducts: [
    {
      id: "PRD-001",
      name: "Premium Laptop",
      category: "Electronics",
      sku: "LAP-PRE-001",
      quantity: 45,
      minStock: 20,
      maxStock: 100,
      price: " ₹1,299.99",
      lastRestocked: "2025-01-01",
      supplier: "SUP-001",
      status: "In Stock"
    },
    {
      id: "PRD-002",
      name: "Wireless Mouse",
      category: "Accessories",
      sku: "ACC-MOU-002",
      quantity: 156,
      minStock: 50,
      maxStock: 200,
      price: " ₹29.99",
      lastRestocked: "2024-12-28",
      supplier: "SUP-001",
      status: "In Stock"
    },
    {
      id: "PRD-003",
      name: "USB-C Cable",
      category: "Accessories",
      sku: "ACC-CAB-003",
      quantity: 12,
      minStock: 30,
      maxStock: 150,
      price: " ₹15.99",
      lastRestocked: "2024-12-20",
      supplier: "SUP-001",
      status: "Low Stock"
    },
    {
      id: "PRD-004",
      name: "Ergonomic Keyboard",
      category: "Accessories",
      sku: "ACC-KEY-004",
      quantity: 78,
      minStock: 25,
      maxStock: 120,
      price: " ₹89.99",
      lastRestocked: "2024-12-30",
      supplier: "SUP-001",
      status: "In Stock"
    },
    {
      id: "PRD-005",
      name: "Monitor 27\"",
      category: "Electronics",
      sku: "MON-27-005",
      quantity: 23,
      minStock: 15,
      maxStock: 60,
      price: " ₹349.99",
      lastRestocked: "2024-12-29",
      supplier: "SUP-001",
      status: "In Stock"
    }
  ]
  },
  {
    storeId:"002",
    storeData: {
    id: "STORE-002",
    name: "Store 2",
    location: "Bengaluru, Karnataka",
    manager: "xxxxx xxxxxx",
    contact: "+91 xxxxx-xxxxx",
    capacity: "70k units",
    currentStock: 3245,
    status: "Active"
  },

  supplyChain : {
    supplier: {
      id: "SUPPLIER-001",
      name: "Supplier 3",
      location: "Chennai,Tamil Nadu",
      contact: "+91 xxxxx-xxxxx"
    },
    hub: {
      id: "HUB-001",
      name: "Hub 2",
      location: "Chennai, Tamil Nadu",
      contact: "+91 xxxxx xxxxx",
    },
    depot: {
      id: "DEP-001",
      name: "Depot 1",
      location: "Chennai, Tamil Nadu",
      contact: "+91 xxxxx-xxxxx"
    }
  },

  currentProducts: [
    {
      id: "PRD-001",
      name: "Premium Laptop",
      category: "Electronics",
      sku: "LAP-PRE-001",
      quantity: 45,
      minStock: 20,
      maxStock: 100,
      price: " ₹1,299.99",
      lastRestocked: "2025-01-01",
      supplier: "SUP-001",
      status: "In Stock"
    },
    {
      id: "PRD-002",
      name: "Wireless Mouse",
      category: "Accessories",
      sku: "ACC-MOU-002",
      quantity: 156,
      minStock: 50,
      maxStock: 200,
      price: " ₹29.99",
      lastRestocked: "2024-12-28",
      supplier: "SUP-001",
      status: "In Stock"
    },
    {
      id: "PRD-003",
      name: "USB-C Cable",
      category: "Accessories",
      sku: "ACC-CAB-003",
      quantity: 12,
      minStock: 30,
      maxStock: 150,
      price: " ₹15.99",
      lastRestocked: "2024-12-20",
      supplier: "SUP-001",
      status: "Low Stock"
    },
    {
      id: "PRD-004",
      name: "Ergonomic Keyboard",
      category: "Accessories",
      sku: "ACC-KEY-004",
      quantity: 78,
      minStock: 25,
      maxStock: 120,
      price: " ₹89.99",
      lastRestocked: "2024-12-30",
      supplier: "SUP-001",
      status: "In Stock"
    },
    {
      id: "PRD-005",
      name: "Monitor 27\"",
      category: "Electronics",
      sku: "MON-27-005",
      quantity: 23,
      minStock: 15,
      maxStock: 60,
      price: " ₹349.99",
      lastRestocked: "2024-12-29",
      supplier: "SUP-001",
      status: "In Stock"
    }
  ]
  },
  {
    storeId:"003",
    storeData: {
    id: "STORE-003",
    name: "Store 3",
    location: "Chennai, Tamil Nadu",
    manager: "xxxxx xxxxxx",
    contact: "+91 xxxxx-xxxxx",
    capacity: "150k units",
    currentStock: 5682,
    status: "Inactive"
  },

  supplyChain : {
    supplier: {
      id: "SUPPLIER-002",
      name: "Supplier 2",
      location: "Chennai,Tamil Nadu",
      contact: "+91 xxxxx-xxxxx"
    },
    hub: {
      id: "HUB-001",
      name: "Hub 1",
      location: "Chennai, Tamil Nadu",
      contact: "+91 xxxxx xxxxx",
    },
    depot: {
      id: "DEP-002",
      name: "Depot 2",
      location: "Chennai, Tamil Nadu",
      contact: "+91 xxxxx-xxxxx"
    }
  },

  currentProducts: [
    {
      id: "PRD-001",
      name: "Premium Laptop",
      category: "Electronics",
      sku: "LAP-PRE-001",
      quantity: 45,
      minStock: 20,
      maxStock: 100,
      price: " ₹1,299.99",
      lastRestocked: "2025-01-01",
      supplier: "SUP-001",
      status: "In Stock"
    },
    {
      id: "PRD-002",
      name: "Wireless Mouse",
      category: "Accessories",
      sku: "ACC-MOU-002",
      quantity: 156,
      minStock: 50,
      maxStock: 200,
      price: " ₹29.99",
      lastRestocked: "2024-12-28",
      supplier: "SUP-001",
      status: "In Stock"
    },
    {
      id: "PRD-003",
      name: "USB-C Cable",
      category: "Accessories",
      sku: "ACC-CAB-003",
      quantity: 12,
      minStock: 30,
      maxStock: 150,
      price: " ₹15.99",
      lastRestocked: "2024-12-20",
      supplier: "SUP-001",
      status: "Low Stock"
    },
    {
      id: "PRD-004",
      name: "Ergonomic Keyboard",
      category: "Accessories",
      sku: "ACC-KEY-004",
      quantity: 78,
      minStock: 25,
      maxStock: 120,
      price: " ₹89.99",
      lastRestocked: "2024-12-30",
      supplier: "SUP-001",
      status: "In Stock"
    },
    {
      id: "PRD-005",
      name: "Monitor 27\"",
      category: "Electronics",
      sku: "MON-27-005",
      quantity: 23,
      minStock: 15,
      maxStock: 60,
      price: " ₹349.99",
      lastRestocked: "2024-12-29",
      supplier: "SUP-001",
      status: "In Stock"
    }
  ]
  }];

  set(id:number){
    return this.Stores[id];
  }

  sets(){
    return this.Stores;
  }

}
