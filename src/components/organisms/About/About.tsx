/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import {
  AboutContainer,
  DetailsContainer,
  ImageContainer,
  StyledRoundedImage,
} from './About.style';
import { NotFound } from '../../molecues/NotFound/NotFound';

interface AboutProps {
  image: string;
  notFound: boolean;
}
export const About = ({ image, notFound }: AboutProps) => {
  useEffect(() => {
    console.log(notFound);
  });
  return (
    <>
      {image || notFound ? (
        <AboutContainer>
          {!notFound ? (
            <>
              <ImageContainer>
                <StyledRoundedImage src={image} alt="dog" />
              </ImageContainer>
              <DetailsContainer>
                <p>
                  Ten pies to wierny i przyjacielski czworonóg, który świetnie
                  czuje się w roli rodzinnego towarzysza. Dobrze dogaduje się z
                  dziećmi, uwielbia pieszczoty i wspólne zabawy. Jest łatwy w
                  prowadzeniu, choć bywa uparty. Sprawdzi się zarówno w małym
                  mieszkaniu jak i w domu z ogrodem.
                </p>
                <p>
                  Wysokość w kłębie 30–35 cm, masa ciała 22–25 kg. Sierść
                  krótka, delikatna, lśniąca, umaszczenie płowe, pręgowane lub
                  łaciate. Charakter czujny, śmiały, oddany, odważny, łagodny,
                  czasem uparty. W zależności od dnia pokazuje różne oblicza
                  swojej natury.
                </p>
              </DetailsContainer>
            </>
          ) : (
            <NotFound />
          )}
        </AboutContainer>
      ) : null}
    </>
  );
};
