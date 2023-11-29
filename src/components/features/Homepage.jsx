import React from 'react';
import { Link } from 'react-router-dom';
import hanger from '../../../public/hanger.png';

export default function HomePage() {
  return (
    <>
      <h1>Welcome to Help Harbor</h1>
      <p>
        Welcome to Help Harbor, a beacon of compassion and collaboration in the
        world of philanthropy. At Help Harbor, our mission is simple yet
        profound: to bridge the gap between charitable organizations in need and
        individuals eager to make a difference. We provide a unique platform
        where charities can post their specific requests for assistance, whether
        it's financial support, volunteer manpower, or resources. Our website
        serves as a virtual harbor, where these heartfelt pleas dock, waiting to
        catch the attention of compassionate souls ready to extend a helping
        hand. Together, we believe in the power of community and collective
        goodwill, transforming the act of giving into a collaborative voyage
        toward a better, more caring world. Join us at Help Harbor, where every
        click, share, and contribution creates ripples of positive change.
      </p>
      <Link to={'/clothes'}>
        <img src={hanger} height={250} width={250} alt='Clothes' />
      </Link>
    </>
  );
}
