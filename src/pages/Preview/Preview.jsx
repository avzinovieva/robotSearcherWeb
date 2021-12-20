import React, {Component} from 'react'
import {connect} from "react-redux"
import {getData} from "../../redux/Data/dataActions";
import Bar from "../../components/FilterBar/Bar"
import PreviewSelection from "../../components/PreviewSelection/PreviewSelection"
import PreviewGallery from "../../components/PreviewGallery/PreviewGallery"
import "./Preview.scss";
import Nav from "../../components/Nav/Nav";
import NavMobile from "../../components/Nav/NavMobile/NavMobile";
import Footer from "../../components/FooterAdmin/Footer";

class Preview extends Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        const {data} = this.props;
        return (
            <div className="preview">
                <div className="preview-container">
                    <Bar
                        rooms={data.data}
                    />
                    <PreviewSelection rooms={data.data} sortedRooms={data.sortedRooms}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data
})

const mapDispatchToProps = dispatch => ({
    getData: () => {
        dispatch(getData())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Preview);


