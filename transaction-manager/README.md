# 💰 Transaction Manager - Svelte 5

A financial transaction management application built with Svelte 5 that allows you to view, categorize, and analyze personal expenses.

## 🌟 Features

### Core Functionality
- ✅ **Transaction visualization** in a sortable table by date, amount, and category 
- ✅ **Advanced filtering** by date range and category 
- ✅ **Manual categorization** using dropdown selectors 
- ✅ **Smart auto-categorization** based on keywords 
- ✅ **Real-time analytics** with totals and statistics 
- ✅ **Responsive design** that works on mobile and desktop 


## 🏗️ Technical Architecture

### Tech Stack
- **Frontend**: Svelte 5 with runes (`$state`, `$derived`, `$props`) 
- **Styling**: Vanilla CSS with a modern layout 
- **Data**: JSON in localStorage (55+ example transactions) 

### Component Architecture
```
+page.svelte
├── Panel
        ├── Filters & Sort & Totals
        ├── Bulk Actions
        └── Analytics
├── Tabla
        ├── Headers
        ├── Rows
        └── Items

```

### Use of Svelte 5 Runes
- **`$state`**: For reactive data (transactions, filters, sorting) 
- **`$derived`**: For reactive computations (filtered transactions, analytics) 
- **`$props`**: For receiving transaction data 

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or pnpm 

### Step 1: Clone the repository
```bash
git clone https://github.com/pablom89/transactionManager.git
```
### Step 2: Install dependencies
```bash
npm run dev
```

### Step 3: Run the application
```bash
npm run dev
```

The app will be available at http://localhost:5173

## 📊 Categorization Logic

### Auto-categorization
The system includes smart rules to automatically categorize transactions:

```javascript
const categorizationRules = {
  'STARBUCKS': 'Coffee',
  'WHOLE FOODS': 'Groceries', 
  'AMAZON': 'Shopping',
  'UBER': 'Transportation',
  'NETFLIX': 'Entertainment',
  'RENT': 'Housing',
  // ... y más
};
```

### Available Categories
- ☕ Coffee
- 🛒 Groceries 
- 🛍️ Shopping
- 📱 Electronics
- ⛽ Gas
- 🚗 Transportation
- 🎬 Entertainment
- 🍕 Food
- 🏠 Housing
- ⚡ Utilities
- 💰 Income
- 💸 Transfer
- 🏥 Healthcare
- 🔨 Home Improvement
- 💻 Software
- 👕 Clothing
- 🎁 Gifts

## 🧪 Use Cases

### Basic User Flow
1. **Viewing**: The user sees all transactions in the table 
2. **Filtering**: Applies filters by date and category 
3. **Categorization**: Reviews and adjusts suggested categories 
4. **Analysis**: Examines the analytics dashboard 
5. **Bulk Actions**: Uses shortcuts to quickly categorize 



