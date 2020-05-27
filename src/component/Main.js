import React from 'react'
import './Main.css'

class Main extends React.Component{
    render(){
        return(
            <dev className="Main">
                <dev className="Title">Finish your last journey with us</dev>
                <dev className="UserInput">
                    <dev className="Option">
                        <dev className="Question">What is your religion?</dev>
                        <select className="Religion">
                            <option>Buddhism</option>
                            <option>Christian</option>
                            <option>Others</option>
                        </select>
                    </dev>
                    <dev className="Option">
                        <dev className="Question">Where do you live?</dev>
                        <select className="Place">
                            <option>Keelung</option>
                            <option>Taipei</option>
                            <option>New Taipei</option>
                            <option>Yilan</option>
                            <option>Taoyuan</option>
                            <option>Hsinchu</option>
                            <option>Miaoli</option>
                            <option>Taichung</option>
                            <option>Changhua</option>
                            <option>Nantou</option>
                            <option>Yunlin</option>
                            <option>Chiayi</option>
                            <option>Tainan</option>
                            <option>Kaohsiung</option>
                            <option>Pingtung</option>
                            <option>Taitung</option>
                            <option>Hualien</option>
                        </select>
                    </dev>
                    <dev className="Option">
                        <dev className="Question">How much would you like to spend?</dev>
                        <select className="Budget">
                            <option>100,000 ~ 200,000 NT</option>
                            <option>200,000 ~ 300,000 NT</option>
                            <option>300,000 ~ 400,000 NT</option>
                        </select>
                    </dev>
                </dev>
            </dev>
        )
    }
}

export default Main