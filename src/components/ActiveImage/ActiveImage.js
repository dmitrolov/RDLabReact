import React, {Component} from 'react';
import {connect} from "react-redux";
import Navigation from "../Navigation/Navigation";
import ImageService from "./../../services/imageService"
import './active-image.scss'

class ActiveImage extends Component {
    constructor(props) {
        super(props);
        this.unsplash = new ImageService();
        this.state = {
            url: "https://picsum.photos/500/500",
            tags: [
                {title: 'Lorem'},
                {title: 'ipsum'},
                {title: 'dolor'},
                {title: 'sit'},
                {title: 'amet'},
                {title: 'consectetur'},
                {title: 'adipisicing'},
                {title: 'elit'},
                {title: 'Cupiditate'},
                {title: 'vitae'},
                ]
        }
    }

    componentDidMount() {
        console.log(this.props);
        if (this.props.match.params.id !== "0"){
            this.unsplash.getImageById(this.props.match.params.id).then((result) => {
                console.log(result);
                this.setState({url: result.urls.small});
                this.setState({tags: result.tags});
                console.log(this.state);
            });
        }

    }
    render() {
        const imageTags = this.state.tags.map((value) => {
            return <li>{value.title}</li>
        });
        return (
            <div>
                <Navigation/>
                <div className={'active-image-container'}>
                    <img className={'active-image-container__image'} src={this.state.url} alt=""/>
                    <ul className={'active-image-container__tags'}>
                        {imageTags}
                    </ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const activeImage = state.activeImage;
    return { activeImage}
};
export default connect(mapStateToProps, null)(ActiveImage)