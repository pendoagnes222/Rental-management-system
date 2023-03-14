import React from "react";
import './Home.css'
import Banner from "./Banner";
import Card from "./Card";
import About from "./About";
import './Card.css'

import Service from "./Service";
import Amenities from "./Amenities";





function Home() {
    return (
        <div className="home">
        <Banner />
        <h1>Top-rated service apartment in Nairobi bb</h1>
        <div className='home__section'>
            
             <Card 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlhuKexoWBekJRxsVR4QHkrWJnCpqrw9iGXmJ_y48fis3h8s6Y24x_OTaba2hfGkQ8T0&usqp=CAU"
            title="serviced apartment in Nairobi"
            description="Unique activities we can do together, led by a world of hosts."
            />
            
            <Card 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeo5B0SRQfEvw6r9iZicKWJW5ykXfhQp3syjyff3xhwwSaOHSOnRTKs2T3Lt-L5vesWY4&usqp=CAU"
            title="serviced apartment in Nairobi"
            description="Unique activities we can do together, led by a world of hosts."
            />
            
            
            <Card 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzLSC8muoGRkj4AV0gKwxXXrP6JHwYznBqO4FHaEWDACxFeJ4Vz_2-bp4WT4mJg_M1DLo&usqp=CAU"
             title="serviced apartment in Nairobi"
             description="Comfortable private places, with room for friends or family."
            />
        </div>
        <div className="home__section">
            <Card 
            src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
            title="serviced apartment in Nairobi"
            description="Superhost with a stunning view of the beachside "
            price="£130/night"
            />
            <Card 
            src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg" 
            title="serviced apartment in Nairobi"
            description="Enjoy the amazing sights of kenya with this stunning house"
            price="£350/night"
            /> 
            <Card 
            src="https://media.nomadicmatt.com/2018/apartment.jpg"
            title="serviced apartment in Nairobi"
            description="Superhost with great amenities and a fabolous shopping complex nearby"
            price="£70/night"
        
            />
        </div>
<<<<<<< HEAD

        <h1>Serviced apartment in Nairobi</h1>
        <div className="amenities">
             <Card 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdEOBxWZTsCTHnhcDUY_6kBsdjvvAKfAXeg&usqp=CAU"
            title="serviced apartment in Nairobi"
            description="Superhost with a stunning view of the beachside "
            price="£130/night"/> 
            <Card 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdS0FK5FzeKzafzRHzGP9nIIjjpUkqYvCoyw&usqp=CAU"
            title="serviced apartment in Nairobi"
            description="Superhost with a stunning view of the beachside "
            price="£130/night"/>
            <Card 
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRUYGRgYGhoaGBkYGBgZHBgYGBgaHBoaGBocIS4lHB4rIRwYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQjISs0MTE0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAEUQAAEDAQQGBggDBQcFAQAAAAEAAhEDBBIhMQVBUWFxkSIygaGxwQYTI0JSctHwFGKyFYKi4fEzU3OSs8LSJDRDo8Nj/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJhEBAQACAgICAQMFAAAAAAAAAAECESExAxJBURMyYXEEIqGxwf/aAAwDAQACEQMRAD8A6wBSASAUgksoTwklKAdM5wAkmAleVVoph7Sw5EQUEtDxnKdCss8BokkNEYkdL5sPoiKLSBBMnHHig04TgJBSCAaFIBKFIBAIBSCYBOApBJJ0k9HtFwVLwryFW8JEytKt9m7h5rCqtIc/EDLua4/fBdDpVvs38Fh1Wm88YYmP/W/NTe2mPSyz0x6xonK/l8lMeaFMesGf9pS/03oqj/btE5ip3CkFQQL8z/5KX+m7fvSU0NFtHr63zt/SfouootwHFc1opvtq/wA7f0uXUUhg3ifFaY9Mc+02Dpt+b6LcIwPasamOmzj5hbQHj5q6hE5jj/tKRzPAeJTnMcf9qY5ngPNIM+3txb83kxXWEZ8T5KFvHSZ83/BW2Hq9p8An8EIATAKaiAkYW0Zt/wARvhKxK46bvmf+orbr9Zg/P4MWK/ru4u8SqhVt0G9FvyjwSU6YwHAeCSQcmE8qKRUtDlywPSbTb7NcuMY4PvA3pHViIg71svcuQ9PTLKZ2PcObf5IEm7pBvpu8dagzseR/tKup+nTddDk+fFq4J7yMyq2VcUTpVxkunpdL00Yc6TxwLD4kIyl6VUj7lQdjP+a82sr8QtegCClMptp+C2bjvWekVE/GOLfoUUzTFE++f8j/AKLhQMjvC16Yz4+QWkxlZ5YWOnbpaiY9o3HKZHiFc230v7xn+dv1XEVR0mfMR3opzM/vUj1iXbhOFGl1RwHgphQDpJJ0BAqD1aVW9AZulR7N/ArDcJe7Lr//ADjzW7pUdB/ArDaJqHAdc/oYPNZZdtMTWf8A7hmOqt3PaPJM5nSGI/tKX6FCxY2hmI6loP8A7wrnsxbl/aU+4IUO0UPbV/nZ4OXUUcm8T4rl9FD29f5m+a6miMG9vitcOmOfaxvXatQWga1mNHTHai3hXWYk1WyDOvyUr0zCCeMBxRVAYHj5BIw9u6zePmFbYur2nyVdt67fvWrbJ1R2o+CXFMncnSMC8+0Z8zz/AAgLH1ntWsXe1G4O75WWwYq4mt6ElNJSbjUxUkxUtFD1ynpswmiyP7wDm130XWVFzfpa2aIj+8b4OHmlejw/VP5jzq0ggCUI3McVrW2n0JWXZ2S4DfxSmU9XVn4r7ya7a+j6YvNnXGvauv0rYyxzGgYNptJ2ycMTyWHoexXnxGpxHRIksBMZbiF19poB9RjzEFjQ474AXmeTz68ku+nq/jmEmPxrllPsxDA6M7pHf9QjKpuOI2weYBWlbLKA0ADqEyNoDjA+9ifSNiDCIxHq+3otgT3Ls8Xmt5rj8uON1jPlgVagJbudPei3Vhis9+aIbiJXa4Lhzp3lmMsZ8rfAK0Iewn2bPkZ+kIkLNkcJ0wToJEqD1YVW5Bs7SnUfwKwqTT644e8f00lu6U6j/lKwKAPrz8zv0UVnWmPRrEz27DhjSqnnVYfNXVafSZ89PukJUqUVGmAIov8A1MKsrsN9v+I3XxQF+ix7etvI7j/VdZRGDVymih7ervP+4LraPurXHpln2mwdMIpwQ1Pr9iLcqQg8YDiiKDhBG9UP1KLHkOMJA9r644fVW2Z2A7UNWcS7HZ5FJjyBh4Jga5+xJrzEmFS20QMWjsS/Etjq9mCWjCPd03EagfFCWcdIcR4on1gL3mMwUPZhDgdhHiFUTW2kh/xX5e9JTqm5dMUklLRVUXO+lI9gY1PZ+oDzXRvC570p/wC3qHYARxD2lK9HhdZSuJrNHq3g548gAfNB6GsZc+Gi8TJ4ACSeEKyz2oFrw6MWnmh6ekHMD2MwvtuuOu7eaSBxuxwJXNcMspcY9f8ANhjcc78O+FWlQZRe5zWkPdImXEkjJoxOEq+vaKNai+b7bj23IEuIM3Q5oOWDhuurgKFK4xte603XAOh5vFz3VAJx6MBjf84W7ojSzGw0sc0GC6HXi5wBjBwwEmY45rHD+kmN9pzZ/tOf9RM7rK653P4dTY7Q9j7lRpd0Sd4bGo68QUdpeo7BjBec03T8QF3rRrbJWTbPSBsuNJhkgQ5+rMugY53jrgYYIF9ufUIc95vyA0yGxiM9QGPcuvHw28605MvNLlKJqWZzvd6QxMaxr4H6qunktHSVsexrLoaQWA3okgyCYdOp2vcEABGRBG5a4b1yeWUt27TRx9lT/wANn6Qiwg9Fn2NP5G+ARiHFe0gnUZVT7UwG7JnOA1zvAItkJaVW5V0bU18wSCM2kQ4cQpPelLLNw4A0n1H/AClc/ZgfxD+L/wDTo5rat9oY4PYHC8AZbPS5ZxvXP0LU1lpff6IvPxPVxZTgE6sp7QotjSVpvpw8mAPZVOXQTWlpvsP/AOjdfFNaH9N4wwovOeUuA8k9rm/Tz64/SiGu0UPb1Tx/UF11H3VyGi59e/YS4d4K7Cj7vDyWuPTLPtOj1+xFOzQlDrlFuVVCNRXWY9EcT4lUvV1n6o7fEpANaT0jw+qvoxdEx2oe0dYohjgGjgmEsCchq81XaMGzd7lF9XMhDvqnaUAPTOJw1HsUWa1Km7F29MMu1UlOD8A5FJTl3xplO4phwlCg6uwGC5s7JE8lB1qYPe5AnwChoscFhek1P/p6s5XD4hajtIsHxHg36oK2Wtj2uYabnNcIIJAkHgSl7QetrysMYPe8VJlqoCS5hdhsOJ45DkuqtOjmuEGixkOYQGE9UOBIc5wl0gHZwWj+KYzqtos4NjzSucayZS7cMHsfHq6Dy6cZLSOyACjKNktDou2dwO0h8dwIXVv0y0Z1micoazu6Kof6QU/7x54XgO4hEy+pSylt5sC2LQ9qcJexsZXRevcekAI7VpWbQzzIJa0jA33MESJ1OOpBft+n8LncT9U9PT5mGsA7cda0mWX0zsxny2DoO60l1RkN6RuFzzhjAAZjwVFgsZcL1RjmtOLS2Hm7qvAFpaY1AGNqHZpiodYHYpU7U74uUKpM6Xtj+7r7DamBjWsvODRE3Yy3EyrnW5gzMccF5RpM2x9Q3HVSy6yIc4CbovYjfKHqWCph62pTZnPrKzZx3OMrK1Ux29UrW6+blKowEYv94hvgMVRRtTw8G+HskNcWsvdI5jo5ascetuXM+i1mpue9l5j2lgvBpfBgjrGAHDcCdSLr2ekCH0qz2NZspve0YGLpAAA28MVjlbvf/UZT1ratumCZbQF4iS9xGDAAZJnLVnnKAdphhpG+5z5kkFkiJOoGQ3DWFlWqnXe2+x7HMcMXloYYa+L0XBE4bTHJBWezOe6+9wLWkgvBAaDrxGeG7DaFllnlbqIty3wIFN7xeaKb2NxvtAa9u/UQRGRCDo1YrEPe9vSMvIBk4RMiJgR2BRtNBjSQxwLiD1CA2BrOODe7BQsLHh5cB0X4AOxaZAgHfgTiRmp4nd/yreo6BzyXVTM/9LmN5cfMI+1SatPOL4P8H9VjA42m7l6q6InXc1as1s2iTaKWeU8h/Ndfw2l2usDfbTjBe4fwldlS93h5Li7MSHtOPX8x/NdpS93h5LTDpn5Oz2brlFuzQllPTPBEvdiqqCemoVDlsUajsFUy0MGbu6fBATqnE/exOXzA2Kl1pYSce4qTXszvjvHkmNJPVTxhirTUacnN5hQqZZjmEgHYM0+ocUm5HsUoyVJK9vSUbw2jmkp0HmHpG3/qSYza3wjyQrHvAN17xGx7vCVo+lDPbA/lHi5ZzciubLt14dM70i03XotYWv60AyN2cjHVt1rl6npFaXf+V3AD6yui9I67WMY5zA8TEExBxxy+5WB+335MpUx+6T5qseuk5cXsL6+0uOdU8Lw8EZY9FVXOBc18bXY4EQdai232t3VvD5WNb3xKkyw2l5F9z413nnzMJ3r6GPfzWlb2FgY0iCGxw6RQjXojSFnuNptgCA7AGYxGe/FBq/H1Gfk/VRLHomzvAIjUDd3Xj0o2TKz2oim/75LSIbNGqi2V1kU3q4VFcqdGtfo/UtD74eQyAAOkRIJBwyRFn9DWjrVOwXQO6fBbmiXj1DZj3sSfzFT/ABYaTD5wgACQOBAz7VzWuuSL/R2wNo1brSTepuzPwuZuG1dLXlrRBiSB9yub0FWL619uLWtc0mR1nObgBP5Sug0jTqPY0U4DrwPSyiDM/wAka/tukZa9oyT6Nse43nugmYAaBiZwgZ7+KC0ro2nZ5YzoMLQS7rY4gnfgF0tlsloze5n7rD4uPkrLTo4PIe9t4gQCcgMdWDdZzWWPj+4VmO+HI2DRzA5rxaWYAAS1uWoQUZb6ZNWldqh7nFwddAAuASZjA6l0TNGU/gZyb4AeanW0RSdBc2LswWuLIvROLCDqGtTPDN8rtx1pxFFpLq+B6QGWwVGDVwK2nAm0tdjDWHvhaB0BZ2yRfbeiT6x+MGRJecRKoq2GmHXhVq3jhg4O7MQAOxb60maUMfBBM5yOcrtqXu8PJcQylSBl9WIOF8h07gDnwC37NpKYa3IDBzmlsxudBnshXhOEZ3bTNcMvPIm6OeIHms+pphzshA3Qmt9dxpvy1bfiCyAlldU8MZrlov0iD1rx5nyS/Ht38vqs4tVblPtV+sav7QZt7x9VIWtp19yxi4qt3DuCPal6xvfiW/En/EN+ILm3P3n/ADOHmiLHZHvykN+Ikx2TmnMqVxjc9aNRHMKFatAJncOJwHeoN0cwCCCd5JnugKq4AeiBDZiT7xGZ4DxTtokhesYOteJ1nEz3J1K4RhddhsAPfrTJG5r0rb02Hce4j6rGpnE8PJb/AKW0z0XASG3pOwGPouco1muxDgdWB16woynKsLwotlnbUuNflJ1E4jHIKVKx02wAx0/K1vjJTh8OadjjJ2dGMVcbU2cHyfy4nD5cdqzy7a4ydiadlaCAWNBIJAe85CJMdo1awi2Na3ItHyNHkFiG3tnBpO/X3mU5tbj7scSf5KdWq3IB9I3S8He79LPosYuC6OvY/WQXNmDM4gDtwGrWqmvs7PfZ+6Lx/gHmt8ctTTDLHeW2PTovd1WOO+DHPJGUdG1DjAHE8Nko8aVZ7lN7zqmGj/ce5EMdaX9Sk1g3gk/xYdyr3v0j1ximz6IcdZO263LidXJaNn0IMJcJ3uk8mrb0U6pTpBry6/JLiA0g4mMIGqBlqW4wljabRg+pi9wwMReInVhARu/I1N8Rj2L0cZdBeXDdAZr/ADLWs2haTcmTvIJ/VA5LVZdGQHnzUqtcNaXHICUxtTRs7GYYAbAIHIKz1LXYyRGwlvOENUt5DA9wOPVYy7ex2ueQBghTpVpzY8fMx7+8S1LadNYuGQe792Hd8FB1wfjx2vAceTUBadMUmjpVATqaJc48KbRPcgnaUqPB9VQJAzc8+DGSTwJCLTl+mi97Ri5rXne273SUBadLhhF57GD3RryGDZk7cll2h1R4ipUcMYLGC4NWvr/xKmlZ2Mm6IJzIAk8TrUW7PVEDST3mWMe+WxeeSwYk7QXdyjVpVXzeqls6mC7HaZPIhO0/m7lY18b+0o2NLLNZ2tAa1gBnF2N53zE4nmtRlMlzAMTjgOG/isyg+SMO9dVoenDbx15cAtMU0K6wvukFpxGojPMa1lOstqb7jDxDx4SuuUCEWbOXTj3vtLetZwflcR+oKp+kHe9QeOBa7wXa3VFzNqXqfs4Y6VaMHMqD9wrVsdldVAdDmN/OIceDfqug9SyZutnbAUro2I0LkAZYKbfcB3nHxV+KtLQoOYN6og1pqFo2zkMMd3l2od1nHVAM63B2Ic433m6cC3q80VVs8kGctXioini8uxvHDc26BHcp0reo5oaLtNb2oqtaHkuaCXAhhPRkA4dGE66O4PhP+Y/VJVst1nafaDSfMDoO2DUV5dYKzR6wRADpBkkuLi6dWAwHNeh12yDIzzWUzRbBIDGifhaApy5EmnH1LTekAmNiky1UmDpXnO+FrSYxwxcQMl0lu9HbzfZhodvwkdgV9h0FSY0etuF+MntwgZ5RqU2Rct05ZmkXkxToT8xPgyPFFWWy2ypMhrMcLoDYHEie9dY2vRZgwXiNQACZ2lSOqyN5x/qlvGDWVYdH0Se8zUeXHeS483LWoejdBmLgP3j5JjbHu94jhgo3NbhP3tKVz+jmH2Oa+hTwaB+63Dmq36UPuMHMHuCHIGw9qi5uHukckve1UxkFVLS9zWkkiZkDidi026SYX0TIgNLSPhdAz5FYlTqMx1u1z8P1UKVne/qtJG3EDnknLU3Ttm2gFC6breydj8I5uAWLZdDvGdQs3Nkx4ea2X2FrmFj3FwIi8TB3ZCFUtTxFGlfWF1NtK9g0no5Yxnq1HNEWSjUj2gYewXu7BEUqZaLt7IbRJ3n+imSIzHEEJ/um1m2eyNL6j3NDiHtGcwBTYQIOGZPNaQptjIiNWruQlB8PqYk9MbP7unsVrrQAMvAINa8tMYB3GD4qh9ipnEsHKO4Kh9qdIu3Tx/koPtVQ5MPceZnBIrCqaNZqkcCfOVQ/QwGLX8xPeEey1RgRB3z5q5tRpzu+HinpPsxmWNzTjB4T9F0lkfDGjYAh3FsEAcgChK9pNMicjkcuxPejnLcbVUr6wP2ir6ekBtT2dxrXvpi4LO/FjapNtCNloeSoFyG9emFdMtCS5NeQ7qib1yDXlRIVXrUxqICy6kqfWJIDm7Rb2DI3uAgcys2ppF+poA25qioJVOWo9iwuVayQULW5+Bf2TH0UfwxOs+KgwXs4jkVaTdyc4DYcfvmpacJsszh1ojd/NTLQMiR3+KZtac/vmjaGjnvHRYY2uwHfjyS0N6Bvyxh3y4FRa9u2Pvatyj6P5F7+xn/IrRoaOpMODRO2CXcz5K5jU3OOes9mqvi6yQdZwHMwtJmgyeuSTsZEDtI+i2ssQJPDHvVT6pAJOW5V6yIuVoalo1jALjMsZd0iCYk45ZDJFMYTrnuTXgctfxGFXUbgbzsOBVcM7teWkZRvwx5qHr27O3NBueWjo493NMy0CIe0ngJ8EbGhRrxgM9+Kg4ziQZUGvDsGmDGskERtwVjWEdeOyPJGqOAtHB7wQ7Et17WNCL9Sw53h39yhZg6++Py55ZEeQRZqRgYJ7FRbDijHVHaQrmUzt+/JW38YGOGqIB3lXUmnYEQUMGb/ADCi+mzWByhG1aOX2EPUpjs++aNGofRZqkcCcUPaaAc04zlAOMdyuLNYwGskR3KYdOGzIxE9n3ml2c4YbrFsnsJVL6Dhk49oC3/VKp1EJaX7MAveMwDwMdx+qQt7hmHDsnwlbFSzA6kNVsSNDYUaWBycOauZpFUPsG7mha2jhs5Yd4RyOGuNIDanbbxtXPOoOGt3cfFQNN/xcx9EbGo6dttB1qf4reuSFZ7dQPAx4pHSDtjhxH0T9hp1X4sJLk/2mdp5FJHsNJl6iT/TNaY0Pci85xwBOEAI+yUGNGBM7mY44xe1rP1P2jIs+jnvybG92H8+5bFk0CBBe4u3NMDnmtGzMY4kAgnLHPt1SrfVDVAduieIVTH7K5VCz2JjMWMunaRJ5nFWCnexvkjhyUH2m6RIdhrLsBOGJBTPe15IAAeBtjHiFU0i7WsJEg4jefvu2KuQMQ4zrww4KZsziOm/snExvEclbRszNQM7SmWzWd8mMh960Q6m0jGOKdzBHWPd3pNI+wjQ2Bq0nAz0ojMdmoIUOOoE7+r4lbFWDEc5MR4Kh7HOwMkHaBrS0VY1W1Y4kxO4jLLNWU6gOIdE5Aea0amimnIRrzJk8CcEJaNGvbkGnfEHkj1k5G6ZrXZi72/eKJByBOO6O5Zz6b2+64YxG/78URZqjhg4S46s8M57ktwzsoONR5nC7Twz1vRlNkYCDwyVVlrj1jwRMtp6vzVEa+7HRkc09lEWBs44GJnV4q8PjLmhHscBIJOwHzjNDMvTLpwOBGXL7zR7Q/VqG08O9VvqHdOr7lUiplgBx+oVoqCJAHEBGxpVdLiCXYcPFPVpgYgYnM8FF7pwAndr71GqYjaiGkVFyYOTOKZouVbmqwlMUBXcVTqW5EFQcgwj7OqTZQdSOc5RJS0NsupYdyDqaOlbhKreEaG2B+zjtSW3cSRobaFGpeOM4aycIRAa3bA2Aaws2w6WpPwPs3bDgOw5eCOrFzcYLgc7sYbzu4IhWaSD2z0QI3AZjak9gLdbR3fzUMx0QBOrDMJPYTF7pEDLPVsGATI3qREY8c8/LcpMoR1BxmRgd5GPYottDZER2ZTslEivAnAbJkeSAYFrMHObtgznqw1nJNTtRMDwG3wVdSow9bORN2TwOUoj1zdQOOGR5eKrcToJb2vPVA1gYwTO8Y9ynYrG7EucDqwkY4Yyc0QK93OPKI7u1X067SYII3Ed87EGnSaBgMvopObPVInGOxWAn6ZpcRG/LA6kiQZTdrKg4Y7fA8U9Z8YkmJjgmo1mnDHDI4pGsuHXlsOpDvY0mCB80CeaKc/DWhrgAIAJnGZEjmldFAzKUFxAgw0QSMml0RzPchrRa3sMEkTsy147kc98EC93Y/zT02MxMycyT3BEk+Vb+gzJe0Y8sc+Kc2d0wDvz1/co1tMbQRw8FTaHkYNPPAfcJWHKiKQxkTu45mNgKg9zGmCIPb4J2U3GTMTjIPl95KNZsnWY1kAJbOIvtBGTvPxyVVCrex+uOSd5ZGrbB3b0zKjXdU4CeeCJvZroVZClKYlWlEqF5TKreEAg5MXKMpiUAxKiSk8qDhggGeVElRc5QLkGkkoXjtCSA567txR1j0jUpdV0t+F2I7NiSSwlrSt3R2mWVOi/ovJwLQYP8+KNtNmdEty2hxBHYc+aSS3xZZ8A4OTRJidWI1ZlW2cPLTfcLu4dySSrLtOIunSaNWzWSY1YlQfam9meASSUmnWIAm9lriZ+ito2wYDEE7u1Mkq+CENeBjnvkq38SXQAkkpoClxc4yYAOGZkYRs2qdJzaYxGGOOzlwSSQE21/WAlskHsnbn5pXDqMxtwPOfJJJKgKzB0unqxjB1jL+iscwRiIBjI6z/VJJMCadCMvGfFVV+gJzI7pOpJJAUueZwESJzxJVV0nGf6fe5JJKmGrFkXy0j82BIAzw4BD6PtDXtvNBjHMASLxEwNsJ0lEXRpKiXJ0lolBxUHOCSSAgSEwKdJAReqyUkkBQ8KJCSSAjCSSSA//9k="
            title="serviced apartment in Nairobi"
            description="Superhost with a stunning view of the beachside "
            price="£130/night"/>

        </div>
        
        <div className="amenities">
            <Card 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdi_ssWLxJ_kC6HO_qxRxv_i-BX-TzSiB7A&usqp=CAU"
            title="serviced apartment in Nairobi"
            description="Superhost with a stunning view of the beachside "
            price="£130/night"/>
            <Card 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVSqNUpnk2SFkR4XEpQf6e26BAnka0VtrEg&usqp=CAU"
            title="serviced apartment in Nairobi"
            description="Superhost with a stunning view of the beachside "
            price="£130/night"/>
            <Card 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVt-sAkBm5hbTgRPhaa59Oras3qC5Va5ZfA&usqp=CAU"
            title="serviced apartment in Nairobi"
            description="Superhost with a stunning view of the beachside "
            price="£130/night"/>

        </div>

        <div className="amenities">
        <Card 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdi_ssWLxJ_kC6HO_qxRxv_i-BX-TzSiB7A&usqp=CAU"
            title="serviced apartment in Nairobi"
            description="Superhost with a stunning view of the beachside "
            price="£130/night"/>
            <Card 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVSqNUpnk2SFkR4XEpQf6e26BAnka0VtrEg&usqp=CAU"
            title="serviced apartment in Nairobi"
            description="Superhost with a stunning view of the beachside "
            price="£130/night"/>
            <Card 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVt-sAkBm5hbTgRPhaa59Oras3qC5Va5ZfA&usqp=CAU"
            title="serviced apartment in Nairobi"
            description="Superhost with a stunning view of the beachside "
            price="£130/night"/>
        </div>
        
        
        <div>
=======
        <div className="amenities">
            <Amenities />
                    
    </div>
        <div className="service">
>>>>>>> 37f4fda1810bd2cd5d23a952becb77078fa57064
            <Service />
        </div>
       <div className="about">
            <About />
        </div>

        
    
       </div>
        
    )
}

export default Home