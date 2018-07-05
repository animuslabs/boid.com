<script>
  import { Doughnut } from 'vue-chartjs'

  export default {
    extends: Doughnut,
    mounted () {
      // Overwriting base render method with actual data.
      this.renderChart({
        labels: ['Airdrop', 'Team','Development','Early Adopters','Advisors','Marketing'],
        datasets: [
          {
            backgroundColor: ['#f44336','#4caf50','#2196f3','#ff9800','#ffeb3b','#9c27b0'],
            data: this.percentages
          }
        ]
      },{
        cutoutPercentage:50,
        legend:{
          display:false
        },
        tooltips:{
          enabled: false, 
        },
        onHover: (data,chartData) => {
          this.$emit('hover',chartData)
        }
      })
    },
    props:['percentages']
  }
</script>


