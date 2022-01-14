
namespace JatkanShakki
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.PanelPeliAlue = new System.Windows.Forms.Panel();
            this.TextBoxKumpiPelaaVuoro = new System.Windows.Forms.TextBox();
            this.TextBoxKumpiPelaa = new System.Windows.Forms.TextBox();
            this.NappiPelaaja = new System.Windows.Forms.Button();
            this.LabelXWINS = new System.Windows.Forms.Label();
            this.LabelOWINS = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // PanelPeliAlue
            // 
            this.PanelPeliAlue.Location = new System.Drawing.Point(12, 78);
            this.PanelPeliAlue.Name = "PanelPeliAlue";
            this.PanelPeliAlue.Size = new System.Drawing.Size(500, 500);
            this.PanelPeliAlue.TabIndex = 0;
            // 
            // TextBoxKumpiPelaaVuoro
            // 
            this.TextBoxKumpiPelaaVuoro.BackColor = System.Drawing.Color.Black;
            this.TextBoxKumpiPelaaVuoro.Font = new System.Drawing.Font("Venus Rising", 15.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.TextBoxKumpiPelaaVuoro.ForeColor = System.Drawing.Color.Yellow;
            this.TextBoxKumpiPelaaVuoro.Location = new System.Drawing.Point(284, 39);
            this.TextBoxKumpiPelaaVuoro.Multiline = true;
            this.TextBoxKumpiPelaaVuoro.Name = "TextBoxKumpiPelaaVuoro";
            this.TextBoxKumpiPelaaVuoro.ReadOnly = true;
            this.TextBoxKumpiPelaaVuoro.Size = new System.Drawing.Size(136, 33);
            this.TextBoxKumpiPelaaVuoro.TabIndex = 0;
            this.TextBoxKumpiPelaaVuoro.Text = "Turn";
            this.TextBoxKumpiPelaaVuoro.TextAlign = System.Windows.Forms.HorizontalAlignment.Center;
            // 
            // TextBoxKumpiPelaa
            // 
            this.TextBoxKumpiPelaa.BackColor = System.Drawing.Color.Black;
            this.TextBoxKumpiPelaa.Font = new System.Drawing.Font("Venus Rising", 15.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.TextBoxKumpiPelaa.ForeColor = System.Drawing.Color.Yellow;
            this.TextBoxKumpiPelaa.Location = new System.Drawing.Point(74, 39);
            this.TextBoxKumpiPelaa.Multiline = true;
            this.TextBoxKumpiPelaa.Name = "TextBoxKumpiPelaa";
            this.TextBoxKumpiPelaa.ReadOnly = true;
            this.TextBoxKumpiPelaa.Size = new System.Drawing.Size(152, 33);
            this.TextBoxKumpiPelaa.TabIndex = 0;
            this.TextBoxKumpiPelaa.Text = "player";
            this.TextBoxKumpiPelaa.TextAlign = System.Windows.Forms.HorizontalAlignment.Center;
            // 
            // NappiPelaaja
            // 
            this.NappiPelaaja.BackColor = System.Drawing.Color.White;
            this.NappiPelaaja.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center;
            this.NappiPelaaja.Location = new System.Drawing.Point(232, 39);
            this.NappiPelaaja.Name = "NappiPelaaja";
            this.NappiPelaaja.Size = new System.Drawing.Size(46, 33);
            this.NappiPelaaja.TabIndex = 1;
            this.NappiPelaaja.UseVisualStyleBackColor = false;
            // 
            // LabelXWINS
            // 
            this.LabelXWINS.AutoSize = true;
            this.LabelXWINS.Font = new System.Drawing.Font("Venus Rising", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.LabelXWINS.Location = new System.Drawing.Point(12, 13);
            this.LabelXWINS.Name = "LabelXWINS";
            this.LabelXWINS.Size = new System.Drawing.Size(0, 22);
            this.LabelXWINS.TabIndex = 2;
            // 
            // LabelOWINS
            // 
            this.LabelOWINS.AutoSize = true;
            this.LabelOWINS.Font = new System.Drawing.Font("Venus Rising", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.LabelOWINS.Location = new System.Drawing.Point(280, 13);
            this.LabelOWINS.Name = "LabelOWINS";
            this.LabelOWINS.Size = new System.Drawing.Size(0, 22);
            this.LabelOWINS.TabIndex = 3;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(523, 586);
            this.Controls.Add(this.LabelOWINS);
            this.Controls.Add(this.LabelXWINS);
            this.Controls.Add(this.NappiPelaaja);
            this.Controls.Add(this.PanelPeliAlue);
            this.Controls.Add(this.TextBoxKumpiPelaaVuoro);
            this.Controls.Add(this.TextBoxKumpiPelaa);
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "JätkänShakki";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Panel PanelPeliAlue;
        private System.Windows.Forms.TextBox TextBoxKumpiPelaa;
        private System.Windows.Forms.Button NappiPelaaja;
        private System.Windows.Forms.TextBox TextBoxKumpiPelaaVuoro;
        private System.Windows.Forms.Label LabelXWINS;
        private System.Windows.Forms.Label LabelOWINS;
    }
}

