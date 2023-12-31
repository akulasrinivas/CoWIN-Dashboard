import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderDetails} = props

  return (
    <div className="vaccination-by-gender-container">
      <h1 className="vaccination-by-gender-heading">Vaccination by gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="60%"
          data={vaccinationByGenderDetails}
          startAngle={180}
          endAngle={0}
          innerRadius="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
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

export default VaccinationByGender

// import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
// import './index.css'

// const VaccinationByGender = props => {
//   const {genderDetails} = props
//   return (
//     <div className="vaccination-by-age-container">
//       <h1 className="vaccination-by-age-heading">Vaccination by gender</h1>
//       <ResponsiveContainer width="100%" height={300}>
//         <PieChart>
//           <Pie
//             cx="70%"
//             cy="40%"
//             data={genderDetails}
//             startAngle={0}
//             endAngle={180}
//             innerRadius="40%"
//             outerRadius="70%"
//             dataKey="count"
//           >
//             <Cell name="Male" fill="#fecba6" />
//             <Cell name="Female" fill="#b3d23f" />
//             <Cell name="Other" fill="#a44c9e" />
//           </Pie>
//           <Legend
//             iconType="circle"
//             layout="horizontal"
//             verticalAlign="middle"
//             align="right"
//           />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   )
// }
// export default VaccinationByGender
