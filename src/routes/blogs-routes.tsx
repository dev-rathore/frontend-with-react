const blogsRoutes = [
  {
    path: '',
    element: <>Blogs List</>,
  },
  {
    path: ':blogTitle',
    element: <>Blog Page</>,
  },
  {
    path: 'add',
    element: <>Add New Blog</>,
  },
  {
    path: 'edit/:blogId',
    element: <>Edit Blog</>,
  },
  {
    path: 'category/:category',
    element: <>Category Page</>,
  },
];

export default blogsRoutes;
