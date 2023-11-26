import { Component } from "react";
import css from './SearchBar.module.css'


export class SearchBar extends Component{
    state = {
        value: ''
    }

    handleChange = ({ target: { value } }) => {
        this.setState({value})
    }


    handleSubmit = (e) => {
        if (!this.state.value) {
        alert("Enter your search term")
        return
    }
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.SearchFormButton}>
                    <span className="button-label">Search</span>
                    </button>

                    <input
                        className={css.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                </form>
            </header>
        )
    }
}