(function ($) {
	/* "use strict" */

	var dzChartlist = function () {

		var screenWidth = $(window).width();
		let draw = Chart.controllers.line.__super__.draw; //draw shadow

	
		var AllProject = function () {
			var options = {
				series: [12, 30, 20],
				chart: {
					type: 'donut',
					width: 150,
				},
				plotOptions: {
					pie: {
						donut: {
							size: '80%',
							labels: {
								show: true,
								name: {
									show: true,
									offsetY: 12,
								},
								value: {
									show: true,
									fontSize: '22px',
									fontFamily: 'Arial',
									fontWeight: '500',
									offsetY: -17,
								},
								total: {
									show: true,
									fontSize: '11px',
									fontWeight: '500',
									fontFamily: 'Arial',
									label: 'Compete',

									formatter: function (w) {
										return w.globals.seriesTotals.reduce((a, b) => {
											return a + b
										}, 0)
									}
								}
							}
						}
					}
				},
				legend: {
					show: false,
				},
				colors: ['#3AC977', 'var(--primary)', 'var(--secondary)'],
				labels: ["Compete", "Pending", "Not Start"],
				dataLabels: {
					enabled: false,
				},
			};
			var chartBar1 = new ApexCharts(document.querySelector("#AllProject"), options);
			chartBar1.render();

		}


		// Commercial Chart
		var commercialChart = function () {
			var options = {
				series: [
					{
						name: 'Dehradun',
						data: [80],
					},
					{
						name: 'Mumbai',
						data: [20]
					},
					{
						name: 'Chandigarh',
						data: [40]
					},
					{
						name: 'Banglore',
						data: [60]
					},
					{
						name: 'Delhi',
						data: [40]
					},
					{
						name: 'Gurgaon',
						data: [60]
					},

				],
				chart: {
					type: 'bar',
					height: 120,

					toolbar: {
						show: false,
					},

				},
				plotOptions: {
					bar: {
						horizontal: false,
						columnWidth: '100%',
						endingShape: "rounded",
						borderRadius: 8,
					},

				},
				states: {
					hover: {
						filter: 'none',
					}
				},
				colors: ['#F8B940', '#FFFFFF'],
				dataLabels: {
					enabled: false,
					offsetY: -30
				},

				legend: {
					show: false,
					fontSize: '12px',
					labels: {
						colors: '#000000',

					},
					markers: {
						width: 18,
						height: 18,
						strokeWidth: 8,
						strokeColor: '#fff',
						fillColors: undefined,
						radius: 12,
					}
				},
				stroke: {
					show: true,
					width: 14,
					curve: 'smooth',
					lineCap: 'round',
					colors: ['transparent']
				},
				grid: {
					show: false,
					xaxis: {
						lines: {
							show: false,
						}
					},
					yaxis: {
						lines: {
							show: false
						}
					},
				},
				xaxis: {
					categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
					labels: {
						show: false,
						style: {
							colors: '#A5AAB4',
							fontSize: '14px',
							fontWeight: '500',
							fontFamily: 'poppins',
							cssClass: 'apexcharts-xaxis-label',
						},
					},
					crosshairs: {
						show: false,
					},
					axisBorder: {
						show: false,
					},
					axisTicks: {
						show: false,
					},
				},
				yaxis: {
					labels: {
						show: false,
						offsetX: -16,
						style: {
							colors: '#000000',
							fontSize: '13px',
							fontFamily: 'poppins',
							fontWeight: 100,
							cssClass: 'apexcharts-xaxis-label',
						},
					},
				},
			};

			var chartBar1 = new ApexCharts(document.querySelector("#commercialChart"), options);
			chartBar1.render();
		}

		// Residential Chart
		var residentialChart = function () {
			var options = {
				series: [
					{
						name: 'Dehradun',
						data: [100],
					},
					{
						name: 'Mumbai',
						data: [40]
					},
					{
						name: 'Chandigarh',
						data: [60]
					},
					{
						name: 'Banglore',
						data: [120]
					},
					{
						name: 'Delhi',
						data: [80]
					},
					{
						name: 'Gurgaon',
						data: [120]
					},

				],
				chart: {
					type: 'bar',
					height: 120,

					toolbar: {
						show: false,
					},

				},
				plotOptions: {
					bar: {
						horizontal: false,
						columnWidth: '100%',
						endingShape: "rounded",
						borderRadius: 8,
					},

				},
				states: {
					hover: {
						filter: 'none',
					}
				},
				colors: ['#FFFFFF', '#222B40'],
				dataLabels: {
					enabled: false,
					offsetY: -30
				},

				legend: {
					show: false,
					fontSize: '12px',
					labels: {
						colors: '#000000',

					},
					markers: {
						width: 18,
						height: 18,
						strokeWidth: 8,
						strokeColor: '#fff',
						fillColors: undefined,
						radius: 12,
					}
				},
				stroke: {
					show: true,
					width: 14,
					curve: 'smooth',
					lineCap: 'round',
					colors: ['transparent']
				},
				grid: {
					show: false,
					xaxis: {
						lines: {
							show: false,
						}
					},
					yaxis: {
						lines: {
							show: false
						}
					},
				},
				xaxis: {
					categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
					labels: {
						show: false,
						style: {
							colors: '#A5AAB4',
							fontSize: '14px',
							fontWeight: '500',
							fontFamily: 'poppins',
							cssClass: 'apexcharts-xaxis-label',
						},
					},
					crosshairs: {
						show: false,
					},
					axisBorder: {
						show: false,
					},
					axisTicks: {
						show: false,
					},
				},
				yaxis: {
					labels: {
						show: false,
						offsetX: -16,
						style: {
							colors: '#000000',
							fontSize: '13px',
							fontFamily: 'poppins',
							fontWeight: 100,
							cssClass: 'apexcharts-xaxis-label',
						},
					},
				},
			};

			var chartBar1 = new ApexCharts(document.querySelector("#residentialChart"), options);
			chartBar1.render();
		}

		// Commercial Agent Chart
		var commercialAgentChart = function () {
			var options = {
				series: [
					{
						name: 'Dehradun',
						data: [80],
					},
					{
						name: 'Mumbai',
						data: [20]
					},
					{
						name: 'Chandigarh',
						data: [40]
					},
					{
						name: 'Banglore',
						data: [60]
					},
					{
						name: 'Delhi',
						data: [40]
					},
					{
						name: 'Gurgaon',
						data: [60]
					},

				],
				chart: {
					type: 'bar',
					height: 120,

					toolbar: {
						show: false,
					},

				},
				plotOptions: {
					bar: {
						horizontal: false,
						columnWidth: '100%',
						endingShape: "rounded",
						borderRadius: 8,
					},

				},
				states: {
					hover: {
						filter: 'none',
					}
				},
				colors: ['#F8B940', '#FFFFFF'],
				dataLabels: {
					enabled: false,
					offsetY: -30
				},

				legend: {
					show: false,
					fontSize: '12px',
					labels: {
						colors: '#000000',

					},
					markers: {
						width: 18,
						height: 18,
						strokeWidth: 8,
						strokeColor: '#fff',
						fillColors: undefined,
						radius: 12,
					}
				},
				stroke: {
					show: true,
					width: 14,
					curve: 'smooth',
					lineCap: 'round',
					colors: ['transparent']
				},
				grid: {
					show: false,
					xaxis: {
						lines: {
							show: false,
						}
					},
					yaxis: {
						lines: {
							show: false
						}
					},
				},
				xaxis: {
					categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
					labels: {
						show: false,
						style: {
							colors: '#A5AAB4',
							fontSize: '14px',
							fontWeight: '500',
							fontFamily: 'poppins',
							cssClass: 'apexcharts-xaxis-label',
						},
					},
					crosshairs: {
						show: false,
					},
					axisBorder: {
						show: false,
					},
					axisTicks: {
						show: false,
					},
				},
				yaxis: {
					labels: {
						show: false,
						offsetX: -16,
						style: {
							colors: '#000000',
							fontSize: '13px',
							fontFamily: 'poppins',
							fontWeight: 100,
							cssClass: 'apexcharts-xaxis-label',
						},
					},
				},
			};

			var chartBar1 = new ApexCharts(document.querySelector("#commercialAgentChart"), options);
			chartBar1.render();
		}

		// Residential Agent Chart
		var residentialAgentChart = function () {
			var options = {
				series: [
					{
						name: 'Dehradun',
						data: [100],
					},
					{
						name: 'Mumbai',
						data: [40]
					},
					{
						name: 'Chandigarh',
						data: [60]
					},
					{
						name: 'Banglore',
						data: [120]
					},
					{
						name: 'Delhi',
						data: [80]
					},
					{
						name: 'Gurgaon',
						data: [120]
					},

				],
				chart: {
					type: 'bar',
					height: 120,

					toolbar: {
						show: false,
					},

				},
				plotOptions: {
					bar: {
						horizontal: false,
						columnWidth: '100%',
						endingShape: "rounded",
						borderRadius: 8,
					},

				},
				states: {
					hover: {
						filter: 'none',
					}
				},
				colors: ['#FFFFFF', '#222B40'],
				dataLabels: {
					enabled: false,
					offsetY: -30
				},

				legend: {
					show: false,
					fontSize: '12px',
					labels: {
						colors: '#000000',

					},
					markers: {
						width: 18,
						height: 18,
						strokeWidth: 8,
						strokeColor: '#fff',
						fillColors: undefined,
						radius: 12,
					}
				},
				stroke: {
					show: true,
					width: 14,
					curve: 'smooth',
					lineCap: 'round',
					colors: ['transparent']
				},
				grid: {
					show: false,
					xaxis: {
						lines: {
							show: false,
						}
					},
					yaxis: {
						lines: {
							show: false
						}
					},
				},
				xaxis: {
					categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
					labels: {
						show: false,
						style: {
							colors: '#A5AAB4',
							fontSize: '14px',
							fontWeight: '500',
							fontFamily: 'poppins',
							cssClass: 'apexcharts-xaxis-label',
						},
					},
					crosshairs: {
						show: false,
					},
					axisBorder: {
						show: false,
					},
					axisTicks: {
						show: false,
					},
				},
				yaxis: {
					labels: {
						show: false,
						offsetX: -16,
						style: {
							colors: '#000000',
							fontSize: '13px',
							fontFamily: 'poppins',
							fontWeight: 100,
							cssClass: 'apexcharts-xaxis-label',
						},
					},
				},
			};

			var chartBar1 = new ApexCharts(document.querySelector("#residentialAgentChart"), options);
			chartBar1.render();
		}

		var swiperreview = function () {

			var swiper = new Swiper('.mySwiper', {
				speed: 1500,
				parallax: true,
				slidesPerView: 4,
				spaceBetween: 20,
				autoplay: {
					delay: 1000,
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				breakpoints: {

					300: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					416: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1280: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1788: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				},
			});
			$('#container_layout').on('change', function () {
				if ($('body').attr('data-container') == "boxed" || "wide-boxed") {
					swiper.params.slidesPerView = 3
				} else {
					swiper.params.slidesPerView = 4
				}
			})
		}




		/* Function ============ */
		return {
			init: function () {
			},


			load: function () {
				// AllProject();
				commercialChart();
				residentialChart();
				commercialAgentChart();
				residentialAgentChart();
				swiperreview();

			},

			resize: function () {
			}
		}

	}();



	jQuery(window).on('load', function () {
		setTimeout(function () {
			dzChartlist.load();
		}, 1000);

	});



})(jQuery);
