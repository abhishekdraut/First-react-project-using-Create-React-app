import ThirdPageCover from "./thirdPageCover";

function ThirdPage() {
    return(
        <div class="third_page-background">
        <div class="third_page_header">Bestselling Books and Audiobooks</div>

        <ul class="third_page_books_container">
          <ThirdPageCover/>
          <ThirdPageCover/>
          <ThirdPageCover/>
          <ThirdPageCover/>
          <ThirdPageCover/>
          <ThirdPageCover/>
          <ThirdPageCover/>
          <ThirdPageCover/>
          <ThirdPageCover/>
          <ThirdPageCover/>
          <ThirdPageCover/>
          <ThirdPageCover/>
        </ul>
        <div>
          <a href="" class="btn solid-btn hero-btn book_container_btn"
            >Read free for 30 days</a
          >
        </div>
        <div class="hero_region_header-three_book-container">
          Only ₹299/month after. Cancel anytime.
        </div>
      </div>
    )
    
}


export default ThirdPage;