import React, { Component } from 'react'
import Media from './Media';

export class Galeri extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <h3 className="text-center">Tanaman Obat Keluarga</h3>
                <br/>
                <br/>
                <Media image="4.jpg" title="Asam Jawa">  
                Asam jawa termasuk dalam keluarga tanaman Fabaceae yang memiliki nama ilmiah Tamarindus indica. 
                Pohon asam  merupakan tanaman asli daerah tropis Afrika, tetapi saat ini telah tumbuh menyebar ke 
                hampir seluruh daerah tropis di dunia karena merupakan sumber nutrisi yang bermanfaat serta disukai 
                karena rasanya yang unik.

                </Media>  
                <Media image="5.jpg" title="Kacang Polong">  
                Kacang polong alias ercis bisa temukan sayuran berupa biji ini dalam berbagai masakan sehari-hari, 
                mulai dari sup, nasi goreng, fuyunghai, juga sebagai campuran bermacam-macam masakan seperti tumisan, 
                bahkan seringkali kita temukan kacang polong sebagai makanan ringan, yang diolah dengan cara dipanggang 
                kemudian diberi garam. Nah, kali ini kita akan mengupas kandungan nutrisi dalam kacang polong beserta 
                manfaatnya untuk kesehatan.
                </Media>
                <Media image="6.jpg" title="Pala">  
                Pala adalah salah satu rempah-rempah Indonesia yang memiliki banyak manfaat untuk kesehatan dan lainnya. 
                Pala pertama kali ditemukan di kepulauan Banda, Maluku dan kemudian menyebar di seluruh Indonesia. 
                Rempah-rempah ini juga menjadi salah satu penyebab Indonesia menjadi wilayah yang dijajah bangsa Eropa. 
                </Media>  
            </div>
        )
    }
}

export default Galeri;