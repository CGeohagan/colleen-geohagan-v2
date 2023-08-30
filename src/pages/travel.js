import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const TravelPage = (props) => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis auctor elit sed
        vulputate. Id volutpat lacus laoreet non curabitur gravida arcu ac. At
        lectus urna duis convallis convallis tellus id. Tristique senectus et
        netus et malesuada fames ac turpis. Donec ultrices tincidunt arcu non
        sodales neque sodales ut. Vitae elementum curabitur vitae nunc sed velit
        dignissim. Fames ac turpis egestas sed tempus urna et pharetra pharetra.
        Quis lectus nulla at volutpat diam ut. Eget mi proin sed libero enim.
        Sit amet massa vitae tortor condimentum lacinia quis vel. Odio tempor
        orci dapibus ultrices in iaculis nunc sed. Auctor urna nunc id cursus.
        Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
        dignissim. Scelerisque fermentum dui faucibus in ornare quam. In est
        ante in nibh mauris cursus mattis molestie a. Faucibus ornare
        suspendisse sed nisi lacus sed. Lobortis mattis aliquam faucibus purus
        in. Duis convallis convallis tellus id interdum. Purus in mollis nunc
        sed id semper risus in. Massa tincidunt dui ut ornare lectus. Blandit
        turpis cursus in hac habitasse platea dictumst quisque. Tortor pretium
        viverra suspendisse potenti nullam. Amet consectetur adipiscing elit ut
        aliquam purus sit amet luctus. Diam donec adipiscing tristique risus nec
        feugiat in fermentum. Amet consectetur adipiscing elit pellentesque
        habitant morbi. Nisi porta lorem mollis aliquam ut porttitor leo. Ipsum
        suspendisse ultrices gravida dictum fusce ut placerat. Netus et
        malesuada fames ac turpis egestas integer. Consectetur adipiscing elit
        ut aliquam. Et egestas quis ipsum suspendisse. At varius vel pharetra
        vel. Ut enim blandit volutpat maecenas volutpat. Quis risus sed
        vulputate odio ut enim. Enim nunc faucibus a pellentesque. Mus mauris
        vitae ultricies leo integer malesuada nunc vel. Tortor consequat id
        porta nibh venenatis cras sed felis. Velit laoreet id donec ultrices
        tincidunt arcu non sodales. Volutpat ac tincidunt vitae semper quis
        lectus nulla at. Rutrum tellus pellentesque eu tincidunt. Aenean sed
        adipiscing diam donec adipiscing. Feugiat pretium nibh ipsum consequat
        nisl. Lacus sed turpis tincidunt id aliquet risus. Sit amet tellus cras
        adipiscing enim. Posuere urna nec tincidunt praesent semper feugiat
        nibh. Ultricies tristique nulla aliquet enim tortor at. Magna sit amet
        purus gravida quis blandit turpis. Ac turpis egestas maecenas pharetra
        convallis posuere morbi leo. Vestibulum lorem sed risus ultricies
        tristique nulla aliquet enim. Imperdiet proin fermentum leo vel orci
        porta non pulvinar. Accumsan tortor posuere ac ut consequat semper
        viverra nam. Adipiscing elit ut aliquam purus sit amet. Urna id volutpat
        lacus laoreet non curabitur gravida arcu ac. Dapibus ultrices in iaculis
        nunc sed augue lacus. Sagittis orci a scelerisque purus semper eget duis
        at. A diam maecenas sed enim ut. Eget gravida cum sociis natoque
        penatibus et magnis dis. Malesuada fames ac turpis egestas. Vitae proin
        sagittis nisl rhoncus mattis rhoncus urna. Et ligula ullamcorper
        malesuada proin libero. Mauris a diam maecenas sed enim ut sem viverra.
        Massa id neque aliquam vestibulum morbi blandit cursus risus. Nulla
        aliquet enim tortor at auctor. Ac felis donec et odio pellentesque diam
        volutpat. Ultricies lacus sed turpis tincidunt id aliquet. Vel pharetra
        vel turpis nunc. Tellus molestie nunc non blandit massa. Urna neque
        viverra justo nec ultrices. Facilisi nullam vehicula ipsum a arcu cursus
        vitae. Cras tincidunt lobortis feugiat vivamus at augue. Semper quis
        lectus nulla at volutpat diam ut venenatis tellus. Faucibus nisl
        tincidunt eget nullam non nisi. Sed elementum tempus egestas sed sed
        risus pretium quam vulputate. Nisl condimentum id venenatis a
        condimentum vitae. Nunc congue nisi vitae suscipit tellus mauris. Tempor
        id eu nisl nunc mi ipsum faucibus vitae. Sit amet mauris commodo quis
        imperdiet massa tincidunt. Lacus sed viverra tellus in hac habitasse
        platea. Tortor condimentum lacinia quis vel eros donec. Ut lectus arcu
        bibendum at varius vel. Sit amet risus nullam eget felis eget nunc.
        Porta non pulvinar neque laoreet suspendisse interdum. Nisl tincidunt
        eget nullam non nisi est sit amet facilisis.
      </p>
      <StaticImage
        alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
        src='../images/lighthouse.jpg'
        style={{ maxWidth: '500px' }}
      />
    </div>
  );
};

export const Head = () => {
  return (
    <>
      <title>Travel Page</title>
    </>
  );
};

export default TravelPage;
