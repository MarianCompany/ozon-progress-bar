var e=class{constructor(e){this.state={value:0,animated:!1,hidden:!1,...e},this.listeners=new Set}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}setState(e){let t={...this.state,...e};JSON.stringify(t)!==JSON.stringify(this.state)&&(this.state=t,this.emit())}emit(){this.listeners.forEach(e=>e(this.state))}},t=class{constructor({root:e,radius:t}){this.root=e,this.radius=t,this.circumference=2*Math.PI*this.radius,this.init()}init(){this.root.innerHTML=`
        <div class="progress__rotator">
            <svg viewBox="0 0 100 100">
                  <circle
                    class="progress__track"
                    cx="50"
                    cy="50"
                    r="${this.radius}"
                  />
                  <circle
                    class="progress__value"
                    cx="50"
                    cy="50"
                    r="${this.radius}"
                  />
            </svg>
        </div>
        `,this.circle=this.root.querySelector(`.progress__value`),this.circle.style.strokeDasharray=this.circumference,this.circle.style.strokeDashoffset=this.circumference}render(e){this.updateProgress(e.value),this.updateAnimation(e.animated),this.updateVisibility(e.hidden)}updateProgress(e){this.circle.style.strokeDashoffset=this.circumference*(1-e/100)}updateAnimation(e){this.root.classList.toggle(`progress_animated`,e)}updateVisibility(e){this.root.classList.toggle(`progress_hidden`,e)}destroy(){this.root.remove()}},n=class{constructor({root:n,initialValue:r=0,radius:i=45}){this.core=new e({value:r}),this.renderer=new t({root:n,radius:i}),this.unsubscribe=this.core.subscribe(e=>{this.renderer.render(e)}),this.renderer.render(this.core.state)}setValue(e){this.core.setState({value:Math.min(100,Math.max(0,e))})}setAnimated(e){this.core.setState({animated:e})}setHidden(e){this.core.setState({hidden:e})}getState(){return this.core.state}destroy(){this.unsubscribe(),this.renderer.destroy()}};export{n as t};