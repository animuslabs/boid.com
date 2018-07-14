<script>
  import { Pie } from 'vue-chartjs'
  import color from 'tinycolor2'
  var labels = ['Airdrop', 'Team','Development','Early Adopters','Advisors','Marketing']
  var originalColors = ['#e57373','#81c784','#64b5f6','#ffb74d','#ce93d8','#ffeb3b']
  var deselectedColors = originalColors.map((el)=>{
    return color(el).desaturate(20).lighten(25).toString()
  })
  var options = {
    // events:['click'],
    cutoutPercentage:80,
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
  function highlightSelected(index){
    var newColors = deselectedColors.concat([])
    newColors[index] = originalColors[index]
    return newColors
  }


  export default {
    extends: Pie,
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
            backgroundColor: originalColors.concat([]),
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
      },
      setActiveItem(active){
        if (active != null){ 
          this.renderChartData.datasets[0].backgroundColor = highlightSelected(active)
        }else{
          this.renderChartData.datasets[0].backgroundColor = originalColors
        }
        setTimeout(()=>{
          this.refreshChart()
        },10)
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


