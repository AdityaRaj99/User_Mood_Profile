import React from 'react'
import { useState,useEffect } from 'react';
import {Line} from 'react-chartjs-2';


function CommonDash({datas,userName}) {
    const [chartData, setChartData] = useState({});
    const [daywiseData, setDaywiseData] = useState(datas.Average.data);
    const [month, setMonth] = useState("1");
    const [week, setWeek] = useState("1");    
    const [label,setLabel] = useState(["week1","week2","week3","week4","week5","week6","week7","week8","week9","week10",
    "week11","week12","week13","week14","week15","week16","week17","week18","week19","week20","week21","week22","week23","week24",])

    const chart =()=>{
        setChartData({
            labels:label,
            datasets:[
                {   data:daywiseData,
                    label:"User Mood",
                    backgroundColor:"lightgreen",
                    borderwidth:4
                }
            ]
        })
    }
    useEffect(()=>{
        setLabel(["week1","week2","week3","week4","week5","week6","week7","week8","week9","week10",
        "week11","week12","week13","week14","week15","week16","week17","week18","week19","week20","week21","week22","week23","week24",])

        setDaywiseData(datas.Average.data)
        chart()
    },[userName,datas])

    function showData(day){
       setLabel(['12 A.M.','2 A.M.','4 A.M.','6 A.M.','8 A.M.','10 A.M.','12 P.M.','2 P.M.','4 P.M.'
       ,'6 P.M.','8 P.M.','10 P.M.'])

        setDaywiseData(datas[month+week][day].data)

        chart()
    }

    function Average(list){
        var total = 0;
        for(var i = 0; i < list.length; i++) {
            total += Number(list[i]);
        }
        return (total / list.length);
    }
    useEffect(()=>{
        setLabel(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'])
        setDaywiseData([  Average(datas[month+week]["Monday"].data),Average(datas[month+week]["Tuesday"].data),Average(datas[month+week]["Wednesday"].data),
        Average(datas[month+week]["Thursday"].data),Average(datas[month+week]["Friday"].data),Average(datas[month+week]["Saturday"].data),Average(datas[month+week]["Sunday"].data)  ])

        chart()
    },[week])
    
    return (<>
            <div className="UserNo"><h1>{userName}</h1></div>
            <div className="graphh-container">
            <div className="mood">😞Happiness 😐 Level 😄</div>
                <Line style={{marginLeft:"6%"}} data={chartData} options={{
                    responsive: true,
                    title:{text:'THICCNESS SCALE',display:true},
                    scales:{
                        xAxes:[
                            {
                                label:"happiness Index",
                                gridLines:{
                                    display:false
                                }
                            }
                        ],
                        yAxes:[
                            {
                                gridLines:{
                                    display:false
                                }
                            }
                        ]
                    }
                }}/>   
                <div className="selectDay">
                    <select onChange={(e)=>{setMonth(e.target.value)}} className="select1">
                        <option  value="1">Month-1</option>
                        <option  value="2">Month-2</option>
                        <option  value="3">Month-3</option>
                        <option  value="4">Month-4</option>
                        <option  value="5">Month-5</option>
                        <option  value="6">Month-6</option>
                    </select>
                    <select onChange={(e)=>{setWeek(e.target.value)}} className="select2">
                        <option value="1">Week 1</option>
                        <option value="2">Week 2</option>
                        <option value="3">Week 3</option>
                        <option value="4">Week 4</option>
                    </select>
                </div>

                <div className="dates">
                    <button  onClick={()=>showData("Monday")}>Monday</button>
                    <button onClick={()=>showData("Tuesday")}>Tuesday</button>
                    <button onClick={()=>showData("Wednesday")}>Wednesday</button>
                    <button onClick={()=>showData("Thursday")}>Thursday</button>
                    <button onClick={()=>showData("Friday")}>Friday</button>
                    <button onClick={()=>showData("Saturday")}>Saturday</button>
                    <button onClick={()=>showData("Sunday")}>Sunday</button>
                </div>
            </div>
        </>
    )
}

export default CommonDash
