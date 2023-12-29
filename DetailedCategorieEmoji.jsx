import React from 'react';
import { useSelector } from 'react-redux';
import Loader from './Loader';

function DetailedCategorieEmoji() {
    
    const detailedCategoryData = useSelector((state) => state.FetchedCategories);

    return (
        <div className="container mt-4">
            {detailedCategoryData.status === 'loading' && <p className="text-center"><Loader /></p>}
            {detailedCategoryData.status === 'failed' && <p className="text-center text-danger">Error: {detailedCategoryData.error}</p>}
            {detailedCategoryData.status === 'succeeded' && detailedCategoryData.detailedCategory.length > 0 ? (
                <div>
                    <h2 className="text-center mb-4 text-center">Emojis in Detailed Category</h2>
                    <div className="row">
                        {detailedCategoryData.detailedCategory.map((emoji, index) => (
                            <div key={index} className="col-2 mb-4">
                                <div className="list-group-item bg-light rounded-3 d-flex justify-content-center align-items-center">
                                    <span
                                        className="me-3"
                                        dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }}
                                        style={{ fontSize: '2em' }}
                                    ></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default DetailedCategorieEmoji;
