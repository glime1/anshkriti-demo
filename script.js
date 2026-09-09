// --- Smart Price Calculator Logic ---
function calculatePrice() {
    let length = document.getElementById('calcLength').value;
    let fabricRate = document.getElementById('calcFabric').value;
    let priceDisplay = document.getElementById('finalPrice');

    if (length === "" || length <= 0) {
        priceDisplay.innerText = "₹0";
        return;
    }

    // फॉर्मूला: (लंबाई × 20 रुपेश प्रति इंच सिलाई खर्च) + फैब्रिक का रेट
    let baseStitchingCost = length * 20;
    let totalEstimatedPrice = baseStitchingCost + parseInt(fabricRate);

    priceDisplay.innerText = "₹" + totalEstimatedPrice;
}

// --- WhatsApp Order Logic ---
function sendToWhatsApp() {
    let name = document.getElementById('custName').value;
    let profile = document.getElementById('profileName').value;
    let length = document.getElementById('length').value;
    let chest = document.getElementById('chest').value;
    let waist = document.getElementById('waist').value;
    let hips = document.getElementById('hips').value;
    let sleeves = document.getElementById('sleeves').value;
    let neck = document.getElementById('neckDesign').value;
    let sleeveStyle = document.getElementById('sleeveStyle').value;
    let fabric = document.getElementById('fabricPrint').value;
    
    // वीडियो कॉल वाला चेकबॉक्स ढूँढें
    let videoCallBox = document.getElementById('videoCall');
    let wantVideoCall = (videoCallBox && videoCallBox.checked) ? "✅ Yes, Please schedule a call" : "❌ No";

    // वैलिडेट करें कि नाम और नाप भरा है या नहीं
    if (!name || !length || !chest || !waist || !hips || !sleeves) {
        alert("Please fill in all required measurement fields before proceeding!");
        return;
    }

    let phoneNumber = "918504926242"; 

    // मैंने यहाँ & की जगह and कर दिया है और \n का इस्तेमाल किया है
    let message = `*New Custom Outfit Order - Anshkriti*\n\n` +
                  `*Customer Name:* ${name}\n` +
                  `*Profile:* ${profile}\n\n` +
                  `*--- Body Measurements (Inches) ---*\n` +
                  `• Total Length: ${length}"\n` +
                  `• Chest: ${chest}"\n` +
                  `• Waist: ${waist}"\n` +
                  `• Hips: ${hips}"\n` +
                  `• Sleeves: ${sleeves}"\n\n` +
                  `*--- Style and Design ---*\n` +
                  `• Neck Design: ${neck}\n` +
                  `• Sleeve Style: ${sleeveStyle}\n` +
                  `• Fabric/Print: ${fabric}\n\n` +
                  `*📹 Video Consultation:* ${wantVideoCall}\n\n` +
                  `_Note: I will share reference photos on this chat._`;

    // encodeURIComponent हर सिंबल को सुरक्षित कर देगा ताकि मैसेज न कटे
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// --- Splash Screen Logic ---
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('splash-screen').classList.add('hide-splash');
    }, 1000); // 1 सेकंड बाद गायब
});

// --- VIP Club Join Logic ---
function joinVIPClub() {
    let phoneNumber = "8504926242"; 
    let message = `Hello! 👑 I want to join the *Anshkriti Royale VIP Club* for exclusive updates and priority stitching. Please add me to the list!`;
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}
// --- Gift Card WhatsApp Logic ---
function buyGiftCard() {
    let amount = document.getElementById('giftAmount').value;
    let recipient = document.getElementById('giftTo').value;
    
    if (!recipient) {
        alert("Please enter the recipient's name! (किसको गिफ्ट देना है, उनका नाम लिखें)");
        return;
    }

    let phoneNumber = "918890288447"; 
    let message = `Hello! 🎁 I want to purchase an *Anshkriti Royal E-Gift Card*.\n\n` +
                  `*Gift Amount:* ₹${amount}\n` +
                  `*To be gifted to:* ${recipient}\n\n` +
                  `Please share the payment details!`;
    
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
