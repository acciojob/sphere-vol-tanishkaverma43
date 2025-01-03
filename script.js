function volume_sphere() {
    // Get radius value from form
    var radius = document.getElementById('radius').value;
  
    // Validate input
    if (radius < 0 || isNaN(radius)) {
        document.getElementById('volume').value = 'NaN';
        return false;
    }
  
    // Calculate volume
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);
  
    // Display volume in output field
    document.getElementById('volume').value = volume.toFixed(4);
  
    // Prevent form from submitting
    return false;
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
