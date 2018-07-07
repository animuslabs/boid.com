<script>
  import { Doughnut } from 'vue-chartjs'
  var labels = ['Airdrop', 'Team','Development','Early Adopters','Advisors','Marketing']
  var originalColors = ['#f44336','#4caf50','#2196f3','#ff9800','#ffeb3b','#9c27b0']
  var options = {
    events: ['click'],
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
        options
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
          // this.initChartData()
          // console.log(this.renderChartData.datasets[0].backgroundColor)
          this.renderChartData.datasets[0].backgroundColor = ['#f44336','#357a38','#0a6ebd','#b36a00','#eed500','#641971']
          this.renderChartData.datasets[0].backgroundColor[selected] = originalColors[selected]
          this.$emit('selected',selected)
          // set
          setTimeout(()=>{
            this.refreshChart()
          },200)
        }
      }
    },
    props:['percentages']
  }
</script>


