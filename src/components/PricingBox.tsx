import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, shadows } from '../styles/variables'

const StyledPricingBox = styled.div`
    position: relative;
    margin-bottom: 3rem;
    padding: 2rem 3rem;
    min-height: 50rem;
    min-width: 22rem;
    width: 25%;
    text-align: center;
    background: ${colors.white};
    box-shadow: ${shadows.light};

    > * {
        color: inherit;
    }

    img {
        display: inline-block;
        margin: 3rem 0 1rem;
        height: 8rem;
    }

    .price {
        font-size: 2.1rem;
        font-weight: 600;
    }

    .duration {
        font-size: 1.5rem;
        margin: .8rem 0 1.5rem;
    }

    .feature {
        margin-top: 8rem;
    }

    ul {
        list-style: initial;
    }

    li {
        font-size: 1.5rem;
        text-align: left;
    }

    .btn {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
    }
`

interface PricingBoxProps {
    title: string
    img: JSX.Element
    price?: string
    duration?: string
    feature?: string
    features?: string[]
    btnText?: string
}

const PricingBox: React.SFC<PricingBoxProps> = ({ title, img, price, duration, feature, features, btnText }) => (
    <StyledPricingBox>
        <h4>{title}</h4>
        {img}
        {price ? <div className="price">{price}</div> : null }
        { duration ? <div className="duration">{duration}</div> : null }
        { feature ? <div className="feature">{feature}</div> : null }
        { features && features.length ?
            <ul>
                { features.map((f, i) => <li key={i}>{f}</li>) }
            </ul>
        : null }
        <Link to="#" className="btn">{btnText ? btnText : 'Start for Free'}</Link>
    </StyledPricingBox>
)

export default PricingBox
