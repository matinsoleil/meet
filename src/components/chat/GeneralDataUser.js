import React from 'react';

const GeneralDataUser = ({ name, status, imgUser }) => {
    return (
        <div className="main-chat-general-data-user">
            <div className="grid-container-user-chat">
                <div className="nameUser">{name}</div>
                <div className="iconUser">
                    <div className="outer-circle" >
                        <img className="imgIcoUser" src={imgUser} alt="test" />
                        <div className="inner-circle circle">&nbsp;</div>
                    </div>
                </div>
                <div className="statusUser">{status}</div>
                <div className="searchContact">
                    <img className="imgSearch" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAaVBMVEX///8AAAD29vbu7u7y8vJQUFD8/PwyMjI/Pz+qqqrk5OTp6ek8PDzd3d1NTU02NjZISEjDw8OAgIC1tbULCwtsbGxWVlbJycmXl5crKyujo6McHBwYGBiGhoZfX1+Pj493d3fT09MjIyNUKRUpAAAEPklEQVRoge1a0ZaqMAzcLVAFRBEEhBVR//8jL+ouSaFqkyLeB+bRYzo0naRJ26+vGTNm/Ddwo2Lr75u6aaq0OIeT8QbbxNvsvhHKOEsj8XbisDoqtIC4juQ7mdOjnvePvnrb5P3DU+YbavctzA98PWB3xmY+b8yYWxyqUZlFbcx8xToajzpakqhbpGNRp1TmFsk48ZZo3Vr7bUKLztf0lun+sBwj3IYhne/76xn6Q/4f60wr+4OWdaB1p+uv++SBJfWpx1w9zh2y8NQ/7+wivbfWzYuslZbql9qs+V4ZKn4dtkL9WI+v9q0y0N7IplBsEi61qwyzNbRyYmzFTTI5Fq15mhQ4NA48sft4CEqwKnGZc6gdTE3bHCTORxyvY8UWRFt5QcZ06jOy9snW2GkN2Rq5jRMoODypZRSadskqwVAyNksMACRV6mLf4ZTcjw+hMGQFyZcSojSpV2DIrb3kqhvCIxlCjByZ1EqpRfn+wHa1r5DQSlCqZnD5ik2Nd+CYYHVkfXEfYTcKpXazV9oNEGamG3DbC3Q2axtq5HTz9AKhya47bigYc4Duy9xXOgjIUMY2kFAtS2xYcNO0KruKq7TspWESppoV3eeuLZuqpuM2TVFQn/IT6h0gWtPtBIqOkyU3VBCmpc/M/UnuzJI7JXO73cabW56awF5smiBFV+2sLE8JoVg9G1qglsYyp8LZmPEGnpA/9wGgajI2gX3X7ngS6oCFsQ3su3ZJFWR+MrYRnU1pdUgGuiF0B1DWWxUP3SgU3cDeZ+N0cLn5cuMF31lEGZzXnChm4C1qAwsAldOaG9Q9s9MqjEFLj4X9xNG0a5olKJ18ZPELdDpH1AxqYHkbqcUAAk2cc0IW/rCC+w50ZMGJM+RxeooQ6G6IfveB77QYrSw+jKZ+Or5ZOtGplWMuolww9Y7V2ijH5ycmNfcAXbk2yIzDvOJ+swLlkmhpqHblUou/FUn1HtTEfcFCMfmO2Z2suKgDvZqFbL772LDJg95Vf/2shpL+z4Dahjzq3fYfkkepIvQXGuart9gNRjQYK/fDwZ7uFNlFQ3uHxz45CTUvLPIkjeT9A6R0iiZ7/hbCY89cxPoRd6s495aPp4vAV/vXUL1ULPjkhU7AJKz45OL0evgOuaf5MbY4qiserPoAF1+6uv/y1d5ia/S8Zn91rtD9dW11kLB9NfdD9Rv5WnILtV8R7p88s0lQUagNTAu13xHss3Iw6i6vz2qyc3WCs1B7N26wbbLjerlabNr8ckz8yBl2To6OfD3SIy/puo7rPp7J+GonQOg2Nju1E8hXGvJRHjqZkL9F7YbQCm45kdud/gurMdX+CrPaP6N23ZrPan83XN3W6030bl2r9tFe0L4iH858KurW7f01n456oPYpqXtqp79LswNS+9TUSO3TU3dqn3at/3BT+2eob2r/FHXb2nyOesaMGR/AP2/5LhHrOcH7AAAAAElFTkSuQmCC" alt=""></img>
                    <input type="text" className="input-search" placeholder="Buscar"></input>
                </div>
            </div>
        </div>
    );
}

export default GeneralDataUser;