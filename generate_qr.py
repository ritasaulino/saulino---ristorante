import qrcode

# Inserisci il link al menù
menu_link = "https://tuonomeutente.github.io/ristorante-saulino/menu.pdf"

# Genera il QR Code
qr = qrcode.make(menu_link)

# Salva l'immagine QR Code
qr.save("menu_qr.png")

print("QR Code generato con successo: menu_qr.png")
