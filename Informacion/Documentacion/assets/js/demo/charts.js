
  /* Sparklines charts */

  $(function() {

    $('.sparkbar').sparkline('html', {
      type: 'bar', 
      disableHiddenCheck: false, 
      width: '36px', 
      height: '36px'
    });

  });

    /* Sparklines */

$(function() {
    $('.bar-sparkline-btn').sparkline([ [3,5], [4,7],[2, 5],[3,5], [4,7], [4, 7], [5, 7], [2, 7], [3,5] ], { type: 'bar', height: '53px', barWidth: '5px', barSpacing: '2px' });
});

$(function() {
    $('.bar-sparkline-btn-2').sparkline([ [3,5], [4,7],[2, 5],[3,5], [4,7], [4, 7], [5, 7], [2, 7], [3,5] ], { type: 'bar', height: '40px', barWidth: '3px', barSpacing: '2px' });
});

$(function() {
    $('.bar-sparkline').sparkline([ [4,8], [2, 7],[2, 6],[2, 7], [3,5],[2, 7],[2, 6],[2, 7], [3,5], [4,7],[2, 5],[3,5], [4,7], [4, 7], [5, 7],[4,8], [2, 7],[2, 6],[2, 7], [3,5] ], { type: 'bar', height: '35px', barWidth: '5px', barSpacing: '2px' });
});

$(function() {
    $('.bar-sparkline-2').sparkline('html', {type: 'bar', barColor: 'black', height: '35px', barWidth: '5px', barSpacing: '2px'} );
});

$(function() {
    $('.tristate-sparkline').sparkline('html', {type: 'tristate', barColor: 'black', height: '35px', barWidth: '5px', barSpacing: '2px'} );
});

$(function() {
    $('.discrete-sparkline').sparkline('html', {type: 'discrete', barColor: 'black', height: '45px', barSpacing: '4px'} );
});

$(function() {
    $('.pie-sparkline').sparkline('html', {type: 'pie', barColor: 'black', height: '45px', width: '45px'} );
});

$(function() {

$(".pie-sparkline-alt").sparkline('html', {
    type: 'pie',
    width: '100',
    height: '100',
    sliceColors: ['#EFEFEF','#5BCCF6','#FA7753'],
    borderWidth: 0});

});

$(function() {
    var myvalues = [10,8,5,7,4,4,1];
    $('.dynamic-sparkline').sparkline(myvalues, {height: '35px', width: '135px'});
});

$(function() {
    var myvalues = [10,8,5,7,4,4,1];
    $('.dynamic-sparkline-5').sparkline(myvalues, {height: '57px', width: '100px'});
});


$(function() {
    $('.tristate-sparkline-2').sparkline('html', {type: 'tristate', 
      posBarColor: '#ec6a00',
      negBarColor: '#ffc98a',
      zeroBarColor: '#000000',
      height: '35px', barWidth: '5px', barSpacing: '2px'} );
});


$(function() {
$(".infobox-sparkline").sparkline([ [3,5], [4,7],[2, 5],[3,5], [4,7], [4, 7], [5, 7], [2, 7], [3,5] ], {
    type: 'bar',
    height: '53',
    barWidth: 5,
    barSpacing: 2,
    zeroAxis: false,
    barColor: '#ccc',
    negBarColor: '#ddd',
    zeroColor: '#ccc',
    stackedBarColor: ['#871010','#ffebeb']});

});

$(function() {
$(".infobox-sparkline-2").sparkline([ [3,5], [4,7],[2, 5],[3,5], [4,7], [4, 7], [5, 7], [2, 7], [3,5] ], {
    type: 'bar',
    height: '53',
    barWidth: 5,
    barSpacing: 2,
    zeroAxis: false,
    barColor: '#ccc',
    negBarColor: '#ddd',
    zeroColor: '#ccc',
    stackedBarColor: ['#000000','#cccccc']});

});

$(function() {
  $(".infobox-sparkline-pie").sparkline([1.5,2.5,2 ], {
    type: 'pie',
    width: '57',
    height: '57',
    sliceColors: ['#0d4f26','#00712b','#2eee76'],
    offset: 0,
    borderWidth: 0,
    borderColor: '#000000'});

});

$(function() {

  $(".infobox-sparkline-tri").sparkline([1,1,0,1,-1,-1,1,-1,0,0,2,1 ], {
      type: 'tristate',
      height: '53',
      posBarColor: '#1bb1fc',
      negBarColor: '#3d57ed',
      zeroBarColor: '#000000',
      barWidth: 5});

});


$(function() {
$(".sprk-1").sparkline( 'html', {
    type: 'line',
    width: '50%',
    height: '65',
    lineColor: '#b2b2b2',
    fillColor: '#ffffff',
    lineWidth: 1,
    spotColor: '#0065ff',
    minSpotColor: '#0065ff',
    maxSpotColor: '#0065ff',
    spotRadius: 4});

});

$(function() {

$(".sparkline-big").sparkline('html', {
    type: 'line',
    width: '85%',
    height: '80',
    highlightLineColor: '#ffffff',
    lineColor: '#ffffff',
    fillColor: 'transparent',
    lineWidth: 1,
    spotColor: '#ffffff',
    minSpotColor: '#ffffff',
    maxSpotColor: '#ffffff',
    highlightSpotColor: '#000000',
    spotRadius: 4});

});

$(function() {

    $(".sparkline-bar-big").sparkline('html', {
        type: 'bar',
        width: '85%',
        height: '90',
        barWidth: 6,
        barSpacing: 2,
        zeroAxis: false,
        barColor: '#ffffff',
        negBarColor: '#ffffff'});

});

$(function() {

    $(".sparkline-bar-big-color").sparkline('html', {
        type: 'bar',
        height: '90',
        width: '85%',
        barWidth: 6,
        barSpacing: 2,
        zeroAxis: false,
        barColor: '#9CD159',
        negBarColor: '#9CD159'});

});

$(function() {

    $(".sparkline-bar-big-color-2").sparkline([405,450,302,405,230,311,405,342,579,405,450,302,183,579,180,311,405,342,579,405,450,302,405,230,311,405,342,579,405,450,302,405,342,432,405,450,302,183,579,180,311,405,342,579,183,579,180,311,405,342,579,405,450,302,405,230,311,405,342,579,405,450,302,405,342,432,405,450,302,183,579,180,311,405,342,579,240,180,311,450,302,370,210], {
        type: 'bar',
        height: '88',
        width: '85%',
        barWidth: 6,
        barSpacing: 2,
        zeroAxis: false,
        barColor: '#9CD159',
        negBarColor: '#9CD159'});

});

    /* Pie gauges */

var initPieChart = function() {

$('.chart').easyPieChart({
    barColor: function(percent) {
        percent /= 100;
        return "rgb(" + Math.round(254 * (1-percent)) + ", " + Math.round(255 * percent) + ", 0)";
    },
    animate: 1000,
    scaleColor: '#ccc',
    lineWidth: 3,
    size: 100,
    lineCap: 'cap',
    onStep: function(value) {
        this.$el.find('span').text(~~value);
    }
});

$('.chart-alt').easyPieChart({
    barColor: function(percent) {
        percent /= 100;
        return "rgb(" + Math.round(255 * (1-percent)) + ", " + Math.round(255 * percent) + ", 0)";
    },
    trackColor: '#333',
    scaleColor: false,
    lineCap: 'butt',
    rotate: -90,
    lineWidth: 20,
    animate: 1500,
    onStep: function(value) {
        this.$el.find('span').text(~~value);
    }
});

$('.chart-alt-1').easyPieChart({
    barColor: function(percent) {
        percent /= 100;
        return "rgb(" + Math.round(255 * (1-percent)) + ", " + Math.round(255 * percent) + ", 0)";
    },
    trackColor: '#e1ecf1',
    scaleColor: '#c4d7e0',
    lineCap: 'cap',
    rotate: -90,
    lineWidth: 10,
    size: 80,
    animate: 2500,
    onStep: function(value) {
        this.$el.find('span').text(~~value);
    }
});

$('.chart-alt-2').easyPieChart({
    barColor: function(percent) {
        percent /= 100;
        return "rgb(" + Math.round(255 * (1-percent)) + ", " + Math.round(255 * percent) + ", 0)";
    },
    trackColor: '#fff',
    scaleColor: false,
    lineCap: 'butt',
    rotate: -90,
    lineWidth: 4,
    size: 50,
    animate: 1500,
    onStep: function(value) {
        this.$el.find('span').text(~~value);
    }
});

$('.updateEasyPieChart').on('click', function(e) {
  e.preventDefault();
  $('.chart, .chart-alt, .chart-alt-1, .chart-alt-2').each(function() {
    $(this).data('easyPieChart').update(Math.round(100*Math.random()));
  });
});
};

$(document).ready(function() {

initPieChart();

});