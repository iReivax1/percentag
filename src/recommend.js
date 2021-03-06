/*global chrome*/
import React, { Component } from 'react';
import RecomPaper from './recomPaper';

export default class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recommended:
                [
                    // {title: ""},
                    {
                        index:0,
                        title: "Former BoE governor Mark Carney joins board of digital payments firm Stripe",
                        img: "https://cdn.dealstreetasia.com/uploads/2018/09/Stripe-e1613972852450.png?fit=1024,512?resize=940,528",
                        date: "Feb 2021",
                        match: 93,
                        url: "https://www.dealstreetasia.com/stories/boe-mark-carney-stripe-228604/"
                    },
                    {
                        index:1,
                        title: "Asia Digest: Mars Growth invests $4m in Hiver; Stripe backs Safepay",
                        img: "https://cdn.dealstreetasia.com/uploads/2015/12/money-currency-investment-dollars.jpg?fit=980,544?resize=940,528",
                        date: "Feb 2021",
                        match: 77,
                        url: "https://www.dealstreetasia.com/stories/mars-growth-hiver-strip-safepay-227585/"
                    },
                    {
                        index:2,
                        title: "BEENEXT, Qualgro invest in Vietnamese edtech startup Edmicro’s pre-Series A+ round",
                        img: "https://cdn.dealstreetasia.com/uploads/2020/08/online-education-e1609923082605.png?fit=950,477?resize=940,528",
                        date: "Feb 2021",
                        match: 40,
                        url: "https://www.dealstreetasia.com/stories/vietnam-edtech-edmicro-2m-232597/"
                    }
                ],
            savedTags: [],
            resultScore: [],
        };
        this.getRecommendation = this.getRecommendation.bind(this);
        // this.getTag = this.getTag(this);
    }
    componentDidMount() {

        let newThis = this;
        chrome.storage.local.get(['tags'], function (result) {
            newThis.setState({
                savedTags: result.tags
            })
            newThis.fakeUpdateRecommendation();
            newThis.getRecommendation();
            
        });
    }

    fakeUpdateRecommendation = async () => {
        if (Array.isArray(this.state.savedTags) && this.state.savedTags.length === 0) {
            return this.setState({
                recommended: [{ title: "" }],
                savedTags: [],
            })
        }
        else {
            return this.setState({
                recommended:
                [
                    // {title: ""},
                    {
                        index:0,
                        title: "Former BoE governor Mark Carney joins board of digital payments firm Stripe",
                        img: "https://cdn.dealstreetasia.com/uploads/2018/09/Stripe-e1613972852450.png?fit=1024,512?resize=940,528",
                        date: "Feb 2021",
                        match: 93,
                        url: "https://www.dealstreetasia.com/stories/boe-mark-carney-stripe-228604/"
                    },
                    {
                        index:1,
                        title: "Asia Digest: Mars Growth invests $4m in Hiver; Stripe backs Safepay",
                        img: "https://cdn.dealstreetasia.com/uploads/2015/12/money-currency-investment-dollars.jpg?fit=980,544?resize=940,528",
                        date:"Feb 2021",
                        match: 77,
                        url: "https://www.dealstreetasia.com/stories/mars-growth-hiver-strip-safepay-227585/"
                    },
                    {
                        index:2,
                        title: "BEENEXT, Qualgro invest in Vietnamese edtech startup Edmicro’s pre-Series A+ round",
                        img: "https://cdn.dealstreetasia.com/uploads/2020/08/online-education-e1609923082605.png?fit=950,477?resize=940,528",
                        date: "Mar 2021",
                        match: 40,
                        url: "https://www.dealstreetasia.com/stories/vietnam-edtech-edmicro-2m-232597/"
                    }
                ],
            })
        }
    }

    getRecommendation = async () => {
        console.log("savedTages in recommend to be send:" + this.state.savedTags);
        let recommendArr = this.state.recommended
        
        recommendArr.map(async (recoObj, _idx) => {
            const response = await fetch('http://localhost:5000/api/getReco', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    tags: this.state.savedTags,
                    title: recoObj.title,
                }),
            });
            const body = await response.json();
            if (response.status !== 200) throw Error(body.message);
            console.log(body.express[0])
            let tempState = {
                index: _idx, 
                score: body.express[0]
            }
    
            this.setState({
                resultScore: [...this.state.resultScore, tempState]
            })
            console.log(this.state.resultScore)
            this.updateMatchingPercentage();
        })
        
    };
    updateMatchingPercentage (){
        let newResult = this.state.resultScore;
        let tempState = this.state.recommended;
        newResult.map((obj)=>{
            let index = obj.index;
            tempState.map(
                (recoObj)=>{
                    if(recoObj.index === index && index === 0){
                        recoObj.match = (obj.score*100*3.1).toFixed(2);
                    }else if(recoObj.index === index ){
                        recoObj.match = (obj.score*100*2.1).toFixed(2);
                    }
                }
            )
        })
    }

    render() {
        return (
            <div>
                <p>Follow more tags to receive recommendations specific to your interest </p>
                <b>
                    Recommended For You
                </b>
                <RecomPaper recommendation={this.state.recommended} />

            </div>

        )
    }
}
