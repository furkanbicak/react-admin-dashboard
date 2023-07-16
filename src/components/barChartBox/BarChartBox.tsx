import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'
import './barChartBox.scss'

type Props = {
    title       : string,
    color       : string,
    dataKey     : string,
    chartData   : object[]
};

export default function BarChartBox(props: Props) { 
  return (
    <div className='barChartBox'>
        <h1>{props.title}</h1>
        <div className="chart">
            <ResponsiveContainer width="99%" height={150}>
                <BarChart data={props.chartData}>
                    <Tooltip
                        cursor          = {{fill:'none'}}
                        labelStyle      = {{ display: 'none' }}
                        contentStyle    = {{ backgroundColor: '#2a3447', borderRadius:'5px' }}
                    />
                    <Bar 
                        fill    = { props.color } 
                        dataKey = { props.dataKey } 
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}
