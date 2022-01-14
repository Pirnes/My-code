using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Threading;


namespace JatkanShakki
{
    public partial class Form1 : Form
    {
        readonly Button[,] napit = new Button[20,20];
        List<Button> Osumat = new List<Button>();
        readonly Bitmap X = new Bitmap(Properties.Resources.X);
        readonly Bitmap O = new Bitmap(Properties.Resources.O);
        int XVoitot = 0, OVoitot = 0;

        public Form1()
        {
                InitializeComponent();
                LuodaanNapit();
                X.MakeTransparent();
                O.MakeTransparent();

                LabelXWINS.Text = "Player X wins = " + XVoitot;
                LabelOWINS.Text = "Player O wins = " + OVoitot;

                if (NappiPelaaja.Image == null)
                {
                    NappiPelaaja.Image = X;
                }
        }

        //luodaan napit pelialueelle
        private void LuodaanNapit()
        {
            for (int i=0; i<20; i++)
            {
                for (int j=0; j<20; j++)
                {
                    napit[i, j] = new Button();
                    napit[i, j].Size = new Size(25, 25);
                    napit[i, j].Location = new Point(i * 25, j * 25);
                    napit[i, j].FlatStyle = FlatStyle.Flat;
                    napit[i, j].Click += new EventHandler(Napin_Painallus);
                    PanelPeliAlue.Controls.Add(napit[i, j]);
                }
            }
        }

        //tarkistaa kumpi pelaaja vuorossa ja tekee vuoron vaihdon
        private void VaihdaPelaajaa()
        {
            OnkoViisiTaynna();

            if (NappiPelaaja.Image == X)
            {
                NappiPelaaja.Image = O;
            }

            else
            {
                NappiPelaaja.Image = X;
            }
        }

        private void Napin_Painallus(object sender, EventArgs e)
        {
            Button nappi = sender as Button;
            
            if (nappi.Image != null || nappi.Text != "")
            {
                return;
            }

            //asetetaan vuorossa olevan pelaajan kuvake myös pelilaudan napin kuvakkeeksi
            nappi.Image = NappiPelaaja.Image;
            VaihdaPelaajaa();
        }

        //tarkistaa pelaajien osumien määrän
        private void OnkoViisiTaynna()
        {
            //pystysuoran testi
            for (int i = 0; i < 20; i++)
            {
                Osumat = new List<Button>();
                for (int j = 0; j < 20; j++)
                {
                    EtsitaanOsumat(napit[i, j]);
                }
            }

            //vaakasuoran testi
            for (int i = 0; i < 20; i++)
            {
                Osumat = new List<Button>();
                for (int j = 0; j < 20; j++)
                {
                    EtsitaanOsumat(napit[j, i]);
                }
            }

            //diagonaali testi vasen yläkulma --> oikea alakulma
            for (int k = 0; k < 20; k++)
            {
                Osumat = new List<Button>();
                for (int i = k, j =0; i < 20; i++,j++)
                {
                    EtsitaanOsumat(napit[i, j]);
                }

                for (int i = 0, j = k; j < 20; i++,j++)
                {
                    EtsitaanOsumat(napit[i, j]);
                }
            }

            //diagonaali testi vasen alakulma --> oikea yläkulma
            for (int k = 0; k < 20; k++)
            {
                Osumat = new List<Button>();
                for (int i = 19, j = k; j < 20; i--, j++)
                {
                    EtsitaanOsumat(napit[i, j]);
                }
                Osumat = new List<Button>();
                for (int i = k, j = 0; i >= 0; i--, j++)
                {
                    EtsitaanOsumat(napit[i, j]);
                }
            }
        }

        //tarkistaa löytyykö pelaajilta 5 perättäistä osumaa
        private void EtsitaanOsumat(Button nappi)
        {
            if (nappi.Image != NappiPelaaja.Image)
            {
                Osumat.Clear();
            }

            else
            {
                Osumat.Add(nappi);
            }

            if (Osumat.Count == 5)
            {
                NaytaVoittajaNapit();
                return;
            }
        }

        //näyttää syntyneen suoran sekä alustaa seuraavan pelin ja tarkistaa onko kummallakaan pelaajalla 5 voittoa
        //Tulostaa myös messageboxin jossa kysytään aloitetaanko peli alusta vai lopetetaanko
        private void NaytaVoittajaNapit()
        {
            if (NappiPelaaja.Image == X)
            {
                XVoitot++;
                LabelXWINS.Text = "Player X wins = " + XVoitot;
            }

            if (NappiPelaaja.Image == O)
            {
                OVoitot++;
                LabelOWINS.Text = "Player O wins = " + OVoitot;
            }
            
            foreach (var a in Osumat)
            {
                a.BackColor = Color.Green;
                Thread.Sleep(100);
                Refresh();
            }

            for (int i = 0; i < 6; i++)
            {
                TextBoxKumpiPelaa.BackColor = Color.Green;
                TextBoxKumpiPelaaVuoro.Text = "WINS!!";
                TextBoxKumpiPelaaVuoro.BackColor = Color.Green;
                Refresh();
                Thread.Sleep(500);
                TextBoxKumpiPelaa.BackColor = Color.Black;
                TextBoxKumpiPelaaVuoro.Text = "WINS!!";
                TextBoxKumpiPelaaVuoro.BackColor = Color.Black;
                Refresh();
                Thread.Sleep(500);
            }
            TextBoxKumpiPelaaVuoro.Text = "turn";
            Osumat.Clear();
            PanelPeliAlue.Controls.Clear();
            LuodaanNapit();
           
            if (XVoitot == 5 || OVoitot == 5)
            {
                if (MessageBox.Show("YES to restart, or NO to quit.", "Game over", MessageBoxButtons.YesNo) == DialogResult.Yes)
                {
                    Application.Restart();
                }

                if (MessageBox.Show("YES to restart, or NO to quit.", "Game over", MessageBoxButtons.YesNo) == DialogResult.No)
                {
                    Application.Exit();
                }
            }
        }
    }
}
