// 资讯专题
  //标题栏效果
const titles =document.querySelectorAll('#box1>div:first-child>a')
console.log(titles);
titles.forEach(title=>title.onmouseover=function(){
  titles.forEach(a=>a.classList.remove('active'))
  this.classList.add('active')
  const id=this.dataset.id
  console.log(id);
  const d=document.getElementById(id)
  console.log(d);
  console.log(d.parentElement);
  for(const x of d.parentElement.children){
    x.classList.remove('active')
  }
  d.classList.add('active')
})

  //轮播图效果
  const dians=document.querySelectorAll('#banner1>div:nth-child(2)>div:last-child>span')
  console.log('dians:',dians);
  const imgs=document.querySelectorAll('#banner1>div:first-child>a>img')
  console.log(imgs);
  dians.forEach((dian,index)=>dian.onclick=function(){
    dians.forEach(a=>a.classList.remove('active'))    
    this.classList.add('active')
    imgs.forEach(img=>img.classList.remove('active'))
    imgs[index].classList.add('active')
    const id=this.dataset.id
    const d=document.getElementById(id)
    for(const x of d.parentElement.children){
      x.classList.remove('active')
    }
    d.classList.add('active')
  })
  
  // 餐饮管理及排名
    //标题栏变换效果
    const items=document.querySelectorAll('#box2>.gl_title>a')
    items.forEach(item=>item.onmouseover=function(){
      items.forEach(a=>a.classList.remove('active'))
      this.classList.add('active')
      const id=this.dataset.id
      const d=document.getElementById(id)
      for(const x of d.parentElement.children){
        x.classList.remove('active')
      }
      d.classList.add('active')
    })
    //轮播图效果
    const dous=document.querySelectorAll('#banner2>.glpic_title>div>span')
    const tups=document.querySelectorAll('#banner2>div:first-child>a>img')
    console.log(tups);
    dous.forEach((dou,index)=>dou.onclick=function(){
      dous.forEach(a=>a.classList.remove('active'))
      this.classList.add('active')
      tups.forEach(tup=>tup.classList.remove('active'))
      tups[index].classList.add('active')
      const id=this.dataset.id
      const d=document.getElementById(id)
      for(const x of d.parentElement.children){
        x.classList.remove('active')
      }
      d.classList.add('active')
    })

    // 综合点评
      //标题栏效果
      const timus=document.querySelectorAll('#box3>.zh_title>a')
      timus.forEach(timu=>timu.onmouseover=function(){
        timus.forEach(a=>a.classList.remove('active'))
        this.classList.add('active')
        const id=this.dataset.id
        const d=document.getElementById(id)
        for(const x of d.parentElement.children){
          x.classList.remove('active')
        }
        d.classList.add('active')
      })
      //轮播图效果
      const quans=document.querySelectorAll('#banner3>.zhpic_title>div>span')
      const photos=document.querySelectorAll('#banner3>div:first-child>a>img')
      console.log(photos);
      quans.forEach((quan,index)=>quan.onclick=function(){
        quans.forEach(a=>a.classList.remove('active'))
        this.classList.add('active')
        photos.forEach(photo=>photo.classList.remove('active'))
        photos[index].classList.add('active')
        const id=this.dataset.id
        const d=document.getElementById(id)
        for(const x of d.parentElement.children){
          x.classList.remove('active')
        }
        d.classList.add('active')
      })



