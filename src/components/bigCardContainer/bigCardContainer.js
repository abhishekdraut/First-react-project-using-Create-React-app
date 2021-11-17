function BigCardContainer({book_description,book_short_description,book_title,cover_url,authors,tags} ) {
  console.log(book_description)
  
  

  return (
    <>
      <div>
        <div className="counter_container category_name">Book Details</div>
      </div>

      <div className="big_card_container">
        <div className="card big">
          <div className="card_inner left_side big">
            <img
              className="card_image big"
              src={cover_url}
              alt="big-card"
            />
          </div>
          <div className="card_details right_side big">
            <div className="card_inner right_side big header big">
              <a href="#" className="card_details right_side header big">
                {book_title}
              </a>
            </div>

            <div className="card_details right_side aurther big">
              Written By :{}
            </div>
            <div className="card_details right_side border big"></div>
            <div className="card_details right_side details big">
              <div className="right_side details header">
                “THE BOOK CHINA DOESN'T WANT YOU TO READ.”—CNN​
              </div>
              <div className="right_side details summery">
                {book_short_description}
              </div>
              <div className="right_side details description">
                {book_description}
              </div>
            </div>
            <div className="right_side pills">
              
              {/* {tags.map(function (pill) {
                return (
                  <a className="pill" href=" ">
                    {pill.tag_name}
                  </a>
                );
              })} */}
            </div>
            <div className="right_side metadata">
              <div className="metadata-left">
                <div className="publisher">
                  Publisher: <a href="">{}</a>
                </div>
                <div className="isbn">
                  Isbn: <a href="">Asia</a>
                </div>
              </div>
              <div className className="metadata-right">
                <div className="released">
                  Release:<a href="#">{}</a>
                </div>
                <div className="formate">
                  Formate: <a href="#">Asia</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BigCardContainer;
