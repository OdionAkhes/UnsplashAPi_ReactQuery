import React from 'react'

const SearchForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const searchValue = e.target.elements.search.value
        if (!searchValue) return
        console.log(searchValue)

}
   
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form action="" className="search-form">
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
          onSubmit={handleSubmit}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default SearchForm