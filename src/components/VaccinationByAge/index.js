import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props

  return (
    <div className="vaccination-by-age-container">
      <h1 className="vaccination-by-age-heading">Vaccination by age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          data={vaccinationByAgeDetails}
          cx="50%"
          cy="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64C2A6" />
        </Pie>

        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge

// import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
// import './index.css'

// const VaccinationByAge = props => {
//   const {ageDetails} = props
//   return (
//     <div className="vaccination-by-age-container">
//       <h1 className="vaccination-by-age-heading">Vaccination by age</h1>
//       <div className="container">
//         <ResponsiveContainer width={1000} height={300}>
//           <PieChart>
//             <Pie
//               cx="70%"
//               cy="40%"
//               data={ageDetails}
//               startAngle={0}
//               endAngle={360}
//               innerRadius="40%"
//               outerRadius="70%"
//               dataKey="count"
//             >
//               <Cell name="18-44" fill="#fecba6" />
//               <Cell name="44-60" fill="#b3d23f" />
//               <Cell name="Above 60" fill="#a44c9e" />
//             </Pie>
//             <Legend
//               iconType="circle"
//               layout="horizontal"
//               verticalAlign="bottom"
//               align="center"
//               wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
//             />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   )
// }
// export default VaccinationByAge
