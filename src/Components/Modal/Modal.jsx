import { Component } from 'react'
import css from './Modal.module.css'

export class Modal extends Component {


    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
            if (e.code === 'Escape') {
                this.props.onClose()                
            }
    }

    handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose()
        }
    }

    render() {
        const image = this.props.image
        return (
            <div className={css.Overlay} onClick={this.handleBackdropClick}>
                <div className={css.Modal}>
                    <img src={image.largeImageURL} alt={image.tags} width="900" />
                </div>
            </div>
        )
    }
}

