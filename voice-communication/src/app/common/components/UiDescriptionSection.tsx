import React from 'react';
import './UiDescriptionSection.css';
import Image from 'next/image';
const UiDescriptionSection = () => {
    return (
        <div className="ui-description-section-container">
            <div className="ui-description-section-text-section">
                <h1>User-Friendly Interface</h1>
                <p>Our intuitive drag-and-drop interface makes it easy to create and modify ARS scenarios without technical expertise.</p>
                <div className="ui-description-section-feature">
                    <Image
                        src="/images/drag-icon.png" // public 디렉토리 기준 경로
                        alt="Drag & Drop Icon"
                        width={500} // 원하는 너비
                        height={300} // 원하는 높이
                    />
                    <div>
                        <h3>Drag & Drop Builder</h3>
                        <p>Visual workflow creation with simple drag and drop functionality.</p>
                    </div>
                </div>
                <div className="ui-description-section-feature">
                    <Image
                        src="/images/training-icon.png" // public 디렉토리 기준 경로
                        alt="Training Icon"
                        width={500} // 원하는 너비
                        height={300} // 원하는 높이
                    />
                    <div>
                        <h3>Free Training</h3>
                        <p>Comprehensive training program included with every solution.</p>
                    </div>
                </div>
                <div className="ui-description-section-feature">
                    <Image
                        src="/images/support-icon.png" // public 디렉토리 기준 경로
                        alt="Support Icon"
                        width={500} // 원하는 너비
                        height={300} // 원하는 높이
                    />
                    <div>
                        <h3>24/7 Support</h3>
                        <p>Round-the-clock technical support and assistance.</p>
                    </div>
                </div>
            </div>
            <div className="ui-description-section-image-section">
                <Image
                    src="/images/sample-image.png" // public 디렉토리 기준 경로
                    alt="Interface Image"
                    width={600} // 원하는 너비
                    height={400} // 원하는 높이
                />
            </div>
        </div>
    );
};

export default UiDescriptionSection;