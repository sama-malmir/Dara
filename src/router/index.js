import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new-transaction',
      name: 'NewTransaction',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NewTransaction.vue')
    },
    {
      path:'/financial-transactions',
      name:'FinancialTransactionsView',
      component: () => import ('../views/FinancialTransactions.vue')
    },
    {
      path:'/wallet-transactions/edit/:transactionId',
      name:'EditTransactionsView',
      component: () => import ('../views/EditTransactions.vue')
    },
    {
      path:'/budgets/edit/:budgetId',
      name:'EditBudgetsView',
      component: () => import ('../views/EditBudgets.vue')
    },
    {
      path:'/budgets',
      name:'Budgets',
      component: () => import ('../views/Budgets.vue')
    },
    {
      path:'/new-budget',
      name:'NewBudget',
      component: () => import ('../views/NewBudget.vue')
    },
    {
      path:'/loan',
      name:'Loan',
      component: () => import ('../views/Loan.vue')
    },
    {
      path:'/new-loan',
      name:'NewLoan',
      component: () => import ('../views/NewLoan.vue')
    },
    {
      path:'/loan-details/:loanId',
      name:'LoanDetails',
      component: () => import ('../views/LoanDetails.vue')
    },
  ]
})

export default router
