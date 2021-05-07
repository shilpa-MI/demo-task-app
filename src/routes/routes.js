import HelloWorld from "@/components/HelloWorld";
// import FullLayout from "@/layout/FullLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import TableList from "@/pages/TableList";
import UserProfile from "@/pages/UserProfile";
import Employee from "@/pages/Employee";
import AddEmployee from "@/pages/AddEmployee";
// GeneralViews

// Admin pages

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/table-list'
  },
  {
    path: '/',
    component: DashboardLayout,
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: HelloWorld
      },
      {
        path: 'table-list',
        name: 'Table',
        component: TableList
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'employee',
        name: 'Employee',
        component: Employee
      },
      {
        path: 'employee/add',
        name: 'AddEmployee',
        component: AddEmployee
      },
      {
        path: 'employee/:id/edit',
        name: 'AddEmployee',
        component: AddEmployee
      }
    ]
  }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
