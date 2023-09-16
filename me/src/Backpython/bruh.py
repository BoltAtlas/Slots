import seaborn as sns
import matplotlib.pyplot as plt

# Sample data (replace this with your own dataset)
data = [80,90,100,120,43,2,32,24,22,41,31,33]

# Create a histogram using Seaborn
sns.histplot(data, bins=15, kde=True, color='blue')

# Customize labels and titles
plt.xlabel('Values')
plt.ylabel('Frequency')
plt.title('Histogram Example')

# Display the histogram
plt.show()