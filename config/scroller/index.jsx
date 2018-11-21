import React from "react";
import BScroll from "better-scroll";

class Scroller extends React.Component {
    static defaultProps = {
        rWraper: "scroller-wraper"
    }
    componentDidMount(){
        const { scrollY = true ,scrollX = false , scrollbar = true } = this.props;
        const wraper = this.refs[this.props.rWraper];
        const option ={
            probeType: 0 ,
            click: true,
            scrollY,
            scrollX,
            freeScroll: false,
            scrollbar
        };
        this.scroll = new BScroll(wraper, option);
    }
    render(){
        const { children, rWraper } = this.props;
        return <div ref = { rWraper } className = "scroller-wraper">
            <div className = "scroller">
                { children }
            </div>
        </div>
    }
}
export default Scroller;