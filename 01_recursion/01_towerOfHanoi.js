function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
  if(n === 1 ) {
    console.log(`moved 1 rod from ${from_rod} to ${to_rod}`)
    return;
  }
  towerOfHanoi(n - 1, from_rod, aux_rod, to_rod, console.log("FI") );
  console.log(`moved ${n} rod from ${from_rod} to ${to_rod}`)
  towerOfHanoi(n - 1, aux_rod, to_rod, from_rod); 
}
towerOfHanoi(4, "X", "Y", "Z")