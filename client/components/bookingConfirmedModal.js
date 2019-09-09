import React, {Component} from 'react';
import Link from 'next/link';

class BookingConfirmedModal extends Component {
  render() {
    return (
      <div className="content">
        <img src="/static/confirmed.svg" width="50" />
        <h1>You’re all set!</h1>
        <h1>Enjoy your trip in Singapore.</h1>
        <Link href="/listings">
          <button className="btn btn-primary">Book another trip</button>
        </Link>

        <style jsx>{`
          .content {
            width: 350px;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          h1 {
            font-size: 24px;
            line-height: 30px;
            font-weight: 600;
            color: #373737;
            margin: 0;
          }

          img {
            margin-bottom: 25px;
          }

          .btn {
            margin-top: 25px;
          }
        `}</style>
      </div>
    );
  }
}
export default BookingConfirmedModal;
