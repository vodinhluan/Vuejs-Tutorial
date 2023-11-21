const admin = [
    {
        path: "/admin",
        component: () => import ("../layouts/admin.vue"), // (dinh nghia) khai bao + import component 
        children: [
            {
                path: "users",
                name: "admin-users",
                component: () => import ("../pages/admin/users/index.vue")
            }
        ] 
    }
];

export default admin;