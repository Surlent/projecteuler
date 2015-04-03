function largest_prime_factor(n) {
 var min_factor = least_factor(n);
 if (n==min_factor) return ''+n;
 return largest_prime_factor(n/min_factor);
}