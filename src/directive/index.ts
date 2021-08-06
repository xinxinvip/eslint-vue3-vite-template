
function directive (app: any) {
  app.directive('focus', {
    mounted (el: any) {
      el.focus()
    }
  })

  app.directive('pin', {
    mounted (el:any, binding:any) {
      el.style.position = 'fixed'
      el.style.top = binding.value + 'px'
    }
  })
}

export default directive
