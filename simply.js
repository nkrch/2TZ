let isProst;
for(i=2; i<=1000; i++){
    isProst=true;
    for (j=2;j<i;j++){
        if (i%j==0){
            isProst=false;
        }
    }
    if(isProst)console.log(i);
}
