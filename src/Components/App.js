import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Component } from "react";

import * as API from "../services/images-api";
import { Modal } from "./Modal/Modal";
import { Button } from "./LoadMoreButton/LoadMoreButton";
import { Loader } from "./Loader/Loader";


class App extends Component {

  state = {
    value: '',
    images: null,
    showModal: false,
    selected: null,
    page: 1,
    isLoading: false
  }

  componentDidUpdate(_, prevState) {
    if (prevState.value !== this.state.value || prevState.page !== this.state.page) {
          this.getImages()
        }
  }

  formHandler = ({ value }) => {
    this.setState({ value, images: null, page: 1 })

  }

  getImages = async () => {
    const { value, page } = this.state
    this.setState({isLoading: true})
    try {
      const fetchedImages = await API.getImages(value, page)
      this.setState(prevState => ({
      images: prevState.images
        ? [...prevState.images, ...fetchedImages]
        : fetchedImages
      }))
    }
    catch (error) { }
    finally{this.setState({isLoading: false})}
  } 

  
  onImgClick = (e) => {
    const list = this.state.images
    const selected = list.filter(el => parseInt(el.id) === parseInt(e.currentTarget.id))
    this.setState({ selected: selected[0] })
    this.openModal()
  }

  closeModal = () => {
     this.setState({ showModal: false})
  }

  openModal = () => {
    this.setState({ showModal: true})
  }

  onBtnLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  }



  render() {
    const {images, selected, showModal, isLoading} = this.state
    return (<div>
      <SearchBar onSubmit={this.formHandler} />
      <ImageGallery images={images} onImgClick={this.onImgClick} />
      {images && !isLoading && <Button click={this.onBtnLoadMore} />}
      {isLoading&&<Loader/>}
      {showModal && <Modal image={selected} onClose={this.closeModal} />}
    </div>)
  };
}

export default App
  

