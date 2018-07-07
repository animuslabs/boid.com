<script>
  import { Doughnut } from 'vue-chartjs'
  var labels = ['Airdrop', 'Team','Development','Early Adopters','Advisors','Marketing']
  var originalColors = ['#f44336','#4caf50','#2196f3','#ff9800','#ffeb3b','#9c27b0']
  var options = {
    cutoutPercentage:50,
    legend:{
      display:false
    },
    tooltips:{
      enabled: false, 
    },
    animation:{
      duration:0
    },
  }


  export default {
    extends: Doughnut,
    data:()=>{
      return {
        renderChartData:{},
        options,
        hoverItem:null
      }
    },
    mounted () {
      this.initChartData()
      this.initOnClick()
      this.refreshChart()
    },
    methods:{
      initChartData(){
        var datasets = [
          {
            backgroundColor: ['#f44336','#4caf50','#2196f3','#ff9800','#ffeb3b','#9c27b0'],
          }
        ]
        datasets[0].data = this.percentages
        this.renderChartData = {labels,datasets}
      },
      refreshChart(){
        this.renderChart(this.renderChartData,this.options)
      },
      initOnClick(){
        this.options.onClick = (data,graphData)=>{
          if (!graphData[0]) return
          var selected = graphData[0]._index
          // this.setActiveItem(selected)
          this.$emit('selected',selected)
        }
        this.options.onHover = (data,graphData) =>{ 
          if (!graphData[0]) return this.setHoverItem(null)
          var selected = graphData[0]._index
          this.setHoverItem(selected)
        }
      },
      setActiveItem(active){
        if (active != null){
          this.renderChartData.datasets[0].backgroundColor = ['#C13333','#4F9452','#08599b','#cc7a00','#e0ca00','#671a75']
          this.renderChartData.datasets[0].backgroundColor[active] = originalColors[active]
        }else{
          this.renderChartData.datasets[0].backgroundColor = originalColors
        }
        setTimeout(()=>{
          this.refreshChart()
        },200)
      },
      setHoverItem(active){
        if (this.activeItem === null) return
        this.renderChartData.datasets[0].backgroundColor = ['#C13333','#4F9452','#08599b','#cc7a00','#e0ca00','#671a75']
        this.renderChartData.datasets[0].backgroundColor[this.activeItem] = originalColors[this.activeItem]
        if (active != null){
        this.renderChartData.datasets[0].backgroundColor[active] = originalColors[active]
        }else{
          if (this.hoverItem != active){
            setTimeout(()=>{
              this.refreshChart()
            },200)
          }
        }
        this.hoverItem = active
      }
    },
    watch:{
      activeItem(active){
        this.setActiveItem(active)
      }
    },
    props:['percentages','activeItem']
  }
</script>


