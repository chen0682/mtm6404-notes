const routes = [
  { path: '/', name: 'notes', component: Notes },
  { path: '/note/:id', name: 'note', component: Note, props: true }
]

const router = new VueRouter({
  routes
})
